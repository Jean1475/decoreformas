"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useMotionValue,
  animate,
} from "motion/react";
import Image from "next/image";

const ZOOM_ESCALA = 2.5;

const EASE = [0.16, 1, 0.3, 1] as const;

export interface GaleriaFoto {
  src: string;
  alt: string;
}

export interface GaleriaGrupo {
  titulo?: string;
  fotos: GaleriaFoto[];
}

export interface GaleriaProyecto {
  nombre: string;
  ubicacion: string;
  tipo: string;
  descripcion: string;
  grupos: GaleriaGrupo[];
}

export default function GaleriaModal({
  proyecto,
  onClose,
}: {
  proyecto: GaleriaProyecto;
  onClose: () => void;
}) {
  const reduce = useReducedMotion() ?? false;
  const [fotoIndex, setFotoIndex] = useState<number | null>(null);
  const [zoomActivo, setZoomActivo] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = "galeria-modal-titulo";

  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const resetZoom = useCallback(() => {
    setZoomActivo(false);
    animate(scale, 1, { duration: 0.25, ease: EASE });
    animate(x, 0, { duration: 0.25, ease: EASE });
    animate(y, 0, { duration: 0.25, ease: EASE });
  }, [scale, x, y]);

  const alternarZoom = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      if (zoomActivo) {
        resetZoom();
        return;
      }
      const offsetX = (rect.width / 2 - (clientX - rect.left)) * (ZOOM_ESCALA - 1);
      const offsetY = (rect.height / 2 - (clientY - rect.top)) * (ZOOM_ESCALA - 1);
      setZoomActivo(true);
      animate(scale, ZOOM_ESCALA, { duration: 0.3, ease: EASE });
      animate(x, offsetX, { duration: 0.3, ease: EASE });
      animate(y, offsetY, { duration: 0.3, ease: EASE });
    },
    [zoomActivo, resetZoom, scale, x, y]
  );

  const todasLasFotos = proyecto.grupos.flatMap((grupo) => grupo.fotos);
  const totalFotos = todasLasFotos.length;
  const iniciosDeGrupo = proyecto.grupos.reduce<number[]>((acc, grupo, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + proyecto.grupos[i - 1].fotos.length);
    return acc;
  }, []);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    function blockOutsideScroll(e: WheelEvent) {
      const panel = panelRef.current;
      if (!panel || !panel.contains(e.target as Node)) {
        e.preventDefault();
        return;
      }
      const atTop = panel.scrollTop <= 0;
      const atBottom =
        Math.ceil(panel.scrollTop + panel.clientHeight) >= panel.scrollHeight;
      if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    }
    document.addEventListener("wheel", blockOutsideScroll, { passive: false });
    return () => document.removeEventListener("wheel", blockOutsideScroll);
  }, []);

  const irFoto = useCallback(
    (delta: number) => {
      resetZoom();
      setFotoIndex((current) => {
        if (current === null) return current;
        return (current + delta + totalFotos) % totalFotos;
      });
    },
    [totalFotos, resetZoom]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (zoomActivo) {
          resetZoom();
        } else if (fotoIndex !== null) {
          setFotoIndex(null);
        } else {
          onClose();
        }
      }
      if (fotoIndex !== null && !zoomActivo) {
        if (e.key === "ArrowLeft") irFoto(-1);
        if (e.key === "ArrowRight") irFoto(1);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fotoIndex, irFoto, onClose, zoomActivo, resetZoom]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(29,53,87,0.72)" }}
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduce ? 1 : 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-7xl max-h-[88vh] overflow-y-auto rounded-lg scrollbar-hidden"
        style={{ background: "#ffffff" }}
        initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 12 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar galería"
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full transition-colors"
          style={{
            width: 36,
            height: 36,
            background: "rgba(29,53,87,0.06)",
            color: "#1D3557",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <p
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 500,
              color: "#457B9D",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {proyecto.tipo} · {proyecto.ubicacion}
          </p>
          <h2
            id={titleId}
            className="mt-1.5"
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#1D3557",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {proyecto.nombre}
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-hanken), sans-serif",
              fontSize: "0.9375rem",
              color: "#6b7889",
              lineHeight: 1.5,
              maxWidth: "62ch",
            }}
          >
            {proyecto.descripcion}
          </p>

          {proyecto.grupos.map((grupo, grupoIdx) => {
            const inicioGrupo = iniciosDeGrupo[grupoIdx];
            return (
              <div key={grupoIdx} className={grupoIdx > 0 ? "mt-10" : "mt-6"}>
                {grupo.titulo && (
                  <h3
                    style={{
                      fontFamily: "var(--font-hanken), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "#1D3557",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {grupo.titulo}
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {grupo.fotos.map((foto, i) => {
                    const indiceFoto = inicioGrupo + i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setFotoIndex(indiceFoto)}
                        className="relative overflow-hidden rounded-md group"
                        style={{ aspectRatio: "4/3" }}
                        aria-label={`Ver foto ${indiceFoto + 1} de ${totalFotos}`}
                      >
                        <Image
                          src={foto.src}
                          alt={foto.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence>
        {fotoIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduce ? 1 : 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                resetZoom();
                setFotoIndex(null);
              }
            }}
          >
            <button
              type="button"
              onClick={() => {
                resetZoom();
                setFotoIndex(null);
              }}
              aria-label="Volver a la galería"
              className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full"
              style={{ width: 40, height: 40, background: "rgba(255,255,255,0.12)", color: "#ffffff" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {totalFotos > 1 && !zoomActivo && (
              <>
                <button
                  type="button"
                  onClick={() => irFoto(-1)}
                  aria-label="Foto anterior"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
                  style={{ width: 44, height: 44, background: "rgba(255,255,255,0.12)", color: "#ffffff" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => irFoto(1)}
                  aria-label="Foto siguiente"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
                  style={{ width: 44, height: 44, background: "rgba(255,255,255,0.12)", color: "#ffffff" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            )}

            <motion.div
              className="relative w-full h-full"
              style={{ overflow: zoomActivo ? "hidden" : "visible" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-full h-full"
                style={{ scale, x, y, cursor: zoomActivo ? "grab" : "zoom-in" }}
                drag={zoomActivo}
                dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
                dragElastic={0.15}
                onClick={(e) => {
                  if (zoomActivo) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  alternarZoom(e.clientX, e.clientY, rect);
                }}
                onDoubleClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  alternarZoom(e.clientX, e.clientY, rect);
                }}
              >
                <Image
                  src={todasLasFotos[fotoIndex].src}
                  alt={todasLasFotos[fotoIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain pointer-events-none"
                  priority
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            <p
              className="absolute bottom-4 left-0 right-0 text-center"
              style={{
                fontFamily: "var(--font-hanken), sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {fotoIndex + 1} / {totalFotos}
              {!zoomActivo && (
                <span className="hidden sm:inline"> · Pulsa la foto para hacer zoom</span>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
