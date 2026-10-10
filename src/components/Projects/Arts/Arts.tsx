import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  startTransition,
} from "react";
import "./ArtSection.css";

import Art1 from "../../../assets/images/img_art1.webp";
import Art2 from "../../../assets/images/img_art2.webp";
import Art3 from "../../../assets/images/img_art3.webp";
import Art4 from "../../../assets/images/img_art4.webp";
import Art5 from "../../../assets/images/img_art5.webp";
import Art6 from "../../../assets/images/img_art6.webp";
import Art7 from "../../../assets/images/img_art7.webp";
import Art8 from "../../../assets/images/img_art8.webp";
import Art9 from "../../../assets/images/img_art9.webp";
import Art10 from "../../../assets/images/img_art10.webp";
import Art11 from "../../../assets/images/img_art11.webp";
import Art12 from "../../../assets/images/img_art12.webp";
import Art13 from "../../../assets/images/img_art13.png";
import Art14 from "../../../assets/images/img_art14.png";
import Art15 from "../../../assets/images/img_art15.png";
import Art16 from "../../../assets/images/img_art17.png";
import ImgGirlInBlue from "../../../assets/images/img_girl_in_blue.png";
import ImgCatNana from "../../../assets/images/img_cat_nana.png";
import ImgFishGirl from "../../../assets/images/img_fishGirl.png";
import ImgCatInLavender from "../../../assets/images/img_cat_in_lavender.png"

type Panel = {
  id: number;
  row: number;
  span: number;
  bg: string;
  label: string;
  desc: string;
  img: string;
};

type PanelMediaProps = {
  panel: Panel;
  className?: string;
};

type PanelProps = {
  panel: Panel;
  row: number;
  onClick: (panel: Panel) => void;
};

type RowProps = {
  row: number;
  panels: Panel[];
  onPanelClick: (panel: Panel) => void;
};

const preloadImages = (): void => {
  const images = [
    Art1, Art2, Art3, Art4, Art5, Art6, Art7, Art8,
    Art9, Art10, Art11, Art12, Art13, Art14, Art15, Art16,
  ];
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

if (typeof window !== "undefined") {
  preloadImages();
}

const panels: Panel[] = [
  { id: 1,  row: 1, span: 1, bg: "#F8F2FB", label: "Cat In Lavender",   desc: "Girl with glasses", img: ImgCatInLavender },
  { id: 2,  row: 1, span: 1, bg: "#f0f0d8", label: "Fish Girl",         desc: "Girl with glasses", img: ImgFishGirl },
  { id: 3,  row: 1, span: 1, bg: "#e8d8c0", label: "Cat Nana",          desc: "Girl with glasses", img: ImgCatNana },
  { id: 4,  row: 2, span: 1, bg: "#f0f5e8", label: "Girl In Blue",      desc: "Girl with glasses", img: ImgGirlInBlue },
  { id: 5,  row: 2, span: 1, bg: "#e8d5c4", label: "Us",                desc: "Girl with glasses", img: Art1 },
  { id: 6,  row: 3, span: 1, bg: "#d4e8d4", label: "Ice Cream Date",    desc: "あなたとアイスクリーム", img: Art2 },
  { id: 7,  row: 3, span: 1, bg: "#f5f0e8", label: "Neko",              desc: "Fluffy rabbit", img: Art3 },
  { id: 8,  row: 3, span: 2, bg: "#f5e8d0", label: "Happy Day",         desc: "幸せな一日", img: Art4 },
  { id: 9,  row: 4, span: 1, bg: "#e8d5c4", label: "Black Cat",         desc: "Mysterious cat", img: Art5 },
  { id: 10, row: 4, span: 1, bg: "#d0e8f5", label: "Greenwhich",        desc: "Child eating crackers", img: Art6 },
  { id: 11, row: 5, span: 1, bg: "#e8d4d0", label: "The Flower",        desc: "You found out I'm in love with someone not you", img: Art7 },
  { id: 12, row: 5, span: 1, bg: "#e0dce8", label: "Stare",             desc: "Soft gaze", img: Art8 },
  { id: 13, row: 5, span: 1, bg: "#f0f0d8", label: "Sunflower Garden",  desc: "Sunflowers and a little bird", img: Art9 },
  { id: 14, row: 6, span: 1, bg: "#f0e8e8", label: "Mcdo",              desc: "Dark hair with glasses", img: Art10 },
  { id: 15, row: 6, span: 1, bg: "#e0e8f0", label: "Noodles Mood",      desc: "Warm smile", img: Art11 },
  { id: 16, row: 7, span: 2, bg: "#f5e8c8", label: "3 Friends",         desc: "日本の食べ物屋台", img: Art12 },
  { id: 17, row: 7, span: 1, bg: "#e8d8c0", label: "Starry Night",      desc: "Close-up animal friends", img: Art13 },
  { id: 18, row: 7, span: 1, bg: "#e8d5c4", label: "Duck & Blossoms",   desc: "Fantasy creature", img: Art14 },
  { id: 19, row: 8, span: 1, bg: "#f0f5e8", label: "Cat in the window", desc: "Cherry blossom scene", img: Art15 },
  { id: 20, row: 8, span: 1, bg: "#e8e4e0", label: "Us in Cat",         desc: "Peaceful white cat", img: Art16 },
];

const PanelMedia: React.FC<PanelMediaProps> = React.memo(
  ({ panel, className = "" }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      setLoaded(false);
      const img = imgRef.current;
      if (!img) return;

      if (img.complete && img.naturalWidth > 0) {
        setLoaded(true);
      }
    }, [panel.img]);

    if (!panel.img) return null;

    return (
      <div className={`c-arts__media-wrap ${className}`}>
        {!loaded && (
          <div className="c-arts__media-loader" aria-hidden="true">
            <span className="c-arts__spinner" />
          </div>
        )}
        <img
          ref={imgRef}
          src={panel.img}
          alt={panel.desc}
          className={`c-arts__media-img ${className} ${
            loaded ? "c-arts__media-img--loaded" : "c-arts__media-img--loading"
          }`}
          loading="eager"
          decoding="sync"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>
    );
  }
);

const Panel: React.FC<PanelProps> = React.memo(({ panel, row, onClick }) => (
  <div
    className={`c-arts__flex-panel${row === 3 ? " c-arts__flex-panel--tall" : ""}`}
    style={{
      background: panel.bg,
      flex: panel.span === 2 ? "2" : "1",
      minWidth: panel.span === 2 ? "200px" : "100px",
      minHeight:'400px'
    }}
    onClick={() => onClick(panel)}
  >
    <div className="c-arts__flex-panel-inner">
      <PanelMedia panel={panel} />
    </div>
    <div className="c-arts__flex-panel-label">
      <p>{panel.label}</p>
    </div>
  </div>
));

const Row: React.FC<RowProps> = React.memo(({ row, panels, onPanelClick }) => (
  <div className={`c-arts__flex-row c-arts__flex-row--${row}`}>
    {panels.map((panel) => (
      <Panel key={panel.id} panel={panel} row={row} onClick={onPanelClick} />
    ))}
  </div>
));

const Arts: React.FC = () => {
  const [selected, setSelected] = useState<Panel | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);
  const [closing, setClosing] = useState<boolean>(false);

  const thumbStripRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isDragging = useRef<boolean>(false);
  const dragMoved = useRef<boolean>(false);

  const panelsByRow = useMemo<Record<number, Panel[]>>(() => {
    const rows: Record<number, Panel[]> = {};
    for (let i = 1; i <= panels.length; i++) {
      rows[i] = panels.filter((p) => p.row === i);
    }
    return rows;
  }, []);

  const openModal = useCallback((panel: Panel) => {
    const index = panels.findIndex((p) => p.id === panel.id);

    startTransition(() => {
      setCurrent(index);
      setSelected(panel);
      setClosing(false);
    });

    setAnimating(false);
    setDirection(1);
  }, []);

  const closeModal = useCallback(() => {
    setClosing(true);

    setTimeout(() => {
      setSelected(null);
      setClosing(false);
      setAnimating(false);
    }, 250);
  }, []);

  const navigate = useCallback(
    (newDirection: number) => {
      if (animating) return;

      setAnimating(true);
      setDirection(newDirection);

      const nextIndex = (current + newDirection + panels.length) % panels.length;

      requestAnimationFrame(() => {
        setCurrent(nextIndex);
        setSelected(panels[nextIndex]);

        setTimeout(() => {
          setAnimating(false);
        }, 250);
      });
    },
    [animating, current]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selected) return;
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, navigate, closeModal]);

  useEffect(() => {
    if (!selected) return;
    const strip = thumbStripRef.current;
    const thumb = thumbRefs.current[current];
    if (!strip || !thumb) return;

    const stripRect = strip.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();

    const isFullyVisible =
      thumbRect.left >= stripRect.left && thumbRect.right <= stripRect.right;

    if (!isFullyVisible) {
      const targetLeft =
        thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
      strip.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  }, [current, selected]);

  const onThumbPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const strip = thumbStripRef.current;
    if (!strip) return;

    isDragging.current = true;
    dragMoved.current = false;

    const startX = e.clientX;
    const startScroll = strip.scrollLeft;

    const onMove = (ev: PointerEvent) => {
      if (!isDragging.current) return;
      const dx = ev.clientX - startX;
      if (Math.abs(dx) > 4) dragMoved.current = true;
      strip.scrollLeft = startScroll - dx;
    };

    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }, []);

  const getSlideClass = useCallback((): string => {
    if (!animating) return "";
    return direction > 0
      ? "c-arts__modal-slide--enter-right"
      : "c-arts__modal-slide--enter-left";
  }, [animating, direction]);

  return (
    <section id="arts" className="c-arts-section">
      <div className="c-arts__root">
        <div className="c-arts__flex-container animation-fadeUp">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
            <Row
              key={row}
              row={row}
              panels={panelsByRow[row]}
              onPanelClick={openModal}
            />
          ))}
        </div>

        {selected && (
          <div
            className={`c-arts__modal-bg ${
              closing ? "c-arts__modal-bg--closing" : ""
            }`}
            onClick={closeModal}
          >
            <div
              className={`c-arts__modal-card ${
                closing ? "c-arts__modal-card--closing" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="c-arts__modal-header">
                <span className="c-arts__modal-counter">
                  {current + 1} / {panels.length}
                </span>
                <button className="c-arts__close-btn" onClick={closeModal}>
                  ✕
                </button>
              </div>

              <div
                className="c-arts__modal-stage"
                style={{ background: selected.bg }}
              >
                <div
                  key={selected.id}
                  className={`c-arts__modal-slide ${getSlideClass()}`}
                >
                  <PanelMedia
                    panel={selected}
                    className="c-arts__modal-media"
                  />
                </div>
                <button
                  className="c-arts__nav-btn c-arts__nav-btn--prev"
                  onClick={() => navigate(-1)}
                  disabled={animating}
                >
                  ‹
                </button>
                <button
                  className="c-arts__nav-btn c-arts__nav-btn--next"
                  onClick={() => navigate(1)}
                  disabled={animating}
                >
                  ›
                </button>
              </div>

              <div className="c-arts__modal-info">
                <p className="c-arts__modal-title">{selected.label}</p>
              </div>

              <div className="c-arts__dots">
                {panels.map((_, i) => (
                  <div
                    key={i}
                    className={`c-arts__dot${
                      i === current ? " c-arts__dot--active" : ""
                    }`}
                    onClick={() => {
                      if (!animating) {
                        startTransition(() => {
                          setCurrent(i);
                          setSelected(panels[i]);
                        });
                      }
                    }}
                  />
                ))}
              </div>

              <div
                ref={thumbStripRef}
                className="c-arts__thumb-strip"
                onPointerDown={onThumbPointerDown}
              >
                {panels.map((p, i) => (
                  <div
                    key={p.id}
                    ref={(el) => {
                      thumbRefs.current[i] = el;
                    }}
                    className={`c-arts__thumb${
                      i === current ? " c-arts__thumb--active" : ""
                    }`}
                    style={{ background: p.bg }}
                    onClick={() => {
                      if (dragMoved.current) {
                        dragMoved.current = false;
                        return;
                      }
                      if (!animating) {
                        startTransition(() => {
                          setCurrent(i);
                          setSelected(p);
                        });
                      }
                    }}
                  >
                    <div className="c-arts__thumb-inner">
                      <PanelMedia panel={p} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="c-arts__modal-spacer" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Arts;