/* eslint-disable @typescript-eslint/no-require-imports */
// Read-only reproduction: route source is transpiled in memory; all services are mocked.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('../node_modules/typescript');
const source = fs.readFileSync(path.join(__dirname, '../src/app/api/diagnostico/route.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
async function scenario(mode) {
  let sends = 0;
  const exports = {};
  const context = {
    exports, Response, console: { error() {} },
    process: { env: mode.startsWith('missing_key') || mode === 'invalid_email' ? {} : { RESEND_API_KEY: 'mock-only' }, cwd: () => path.join(__dirname, '..') },
    require(id) {
      if (id === 'resend') return { Resend: class { emails = { send: async () => { sends++; return mode === 'provider_success' ? { error: null } : { error: { message: 'simulated delivery rejection' } }; } }; } };
      if (id === 'next/server') return {};
      if (id === '@/lib/urls') return { SITE_URL: 'https://www.decorreformas.com' };
      if (id === 'fs') return { readFileSync: () => Buffer.from('mock-logo') };
      if (id === 'path') return path;
      throw new Error('Unexpected dependency: ' + id);
    },
    fetch() { throw new Error('Network forbidden in this reproduction'); },
  };
  vm.runInNewContext(compiled, context);
  const response = await exports.POST({ json: async () => ({
    tipoTexto: 'local comercial de 100 m2', detalleTexto: mode === 'missing_key_hosteleria' ? 'reforma completa de restaurante' : 'reforma completa',
    zona: 'Getafe', situacionTexto: 'local propio', urgenciaTexto: 'en tres meses',
    nombre: 'Prueba local', contacto: mode === 'invalid_email' ? 'correo-invalido' : '600000000', canalContacto: mode === 'invalid_email' ? 'email' : 'whatsapp', rgpd: true,
  }) });
  const result = await response.json();
  if (mode === 'invalid_email') {
    assert.equal(response.status, 400);
    assert.equal(result.error, 'Introduce un email válido');
    return { mode, status: response.status, error: result.error };
  }
  assert.equal(response.status, 200);
  assert.equal(result.lead_recibido, mode === 'provider_success');
  assert.equal(result.email_enviado, mode === 'provider_success');
  assert.equal(result.rango_min, mode === 'missing_key_hosteleria' ? 80000 : 40000);
  assert.equal(result.rango_max, mode === 'missing_key_hosteleria' ? 100000 : 70000);
  return { mode, status: response.status, lead_recibido: result.lead_recibido, mocked_email_attempts: sends, range: [result.rango_min, result.rango_max] };
}
Promise.all(['missing_key', 'missing_key_hosteleria', 'provider_rejection', 'provider_success', 'invalid_email'].map(scenario)).then(results => console.log(JSON.stringify(results, null, 2))).catch(error => { console.error(error); process.exitCode = 1; });
