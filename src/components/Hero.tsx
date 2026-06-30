export function Hero() {
  return (
    <div className="hero">
      <div className="hero-grid" />

      {/* eerie no-signal sign */}
      <div className="no-signal">
        <div className="sign">N O&nbsp;&nbsp;S I G N A L</div>
        <div className="level">— LEVEL 0 —</div>
      </div>

      {/* arcade marquee name */}
      <div className="marquee-wrap">
        <div className="marquee">
          <div className="sheen" />
          <div className="name">JEFFREY SEN</div>
          <div className="subtitle">ENGINEER // IN TRANSIT</div>
        </div>
      </div>

      {/* tagline + insert coin */}
      <div className="tagline">
        aerospace &amp; mechanical engineering <span className="arrow">→</span> software
        <br />
        <span className="meta">USC · M.S. Computer Science · in progress · San Jose, CA</span>
      </div>
      <div className="insert-coin">▸ INSERT COIN — PRESS START</div>

      {/* CRT overlays */}
      <div className="scanlines" />
      <div className="dimflicker" />
      <div className="vignette" />
    </div>
  )
}
