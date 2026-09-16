type BottleProps = {
  className?: string;
};

/**
 * Stylised SVG recreation of the Captrol Active 20W-40 4T bottle —
 * silver ergonomic jug, black ribbed cap, red/black diagonal label.
 */
export default function Bottle({ className }: BottleProps) {
  return (
    <svg
      viewBox="0 0 420 640"
      className={className}
      role="img"
      aria-label="Captrol Active 20W-40 4T motorcycle engine oil, one litre silver bottle"
    >
      <defs>
        <linearGradient id="bodySilver" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7c838c" />
          <stop offset="0.12" stopColor="#c9cdd3" />
          <stop offset="0.3" stopColor="#f7f8fa" />
          <stop offset="0.46" stopColor="#c4c9d0" />
          <stop offset="0.6" stopColor="#9aa0a9" />
          <stop offset="0.78" stopColor="#e7e9ed" />
          <stop offset="0.92" stopColor="#a7adb5" />
          <stop offset="1" stopColor="#6d747d" />
        </linearGradient>
        <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b0c0f" />
          <stop offset="0.25" stopColor="#33373e" />
          <stop offset="0.5" stopColor="#15171b" />
          <stop offset="0.78" stopColor="#3a3e46" />
          <stop offset="1" stopColor="#08090c" />
        </linearGradient>
        <radialGradient id="handleIn" cx="0.38" cy="0.32" r="0.85">
          <stop offset="0" stopColor="#8a909a" />
          <stop offset="0.55" stopColor="#5c626b" />
          <stop offset="1" stopColor="#34383f" />
        </radialGradient>
        <linearGradient id="labelRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f23746" />
          <stop offset="0.55" stopColor="#d61526" />
          <stop offset="1" stopColor="#a30d1a" />
        </linearGradient>
        <linearGradient id="labelBlack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b1d23" />
          <stop offset="0.5" stopColor="#0c0d11" />
          <stop offset="1" stopColor="#050608" />
        </linearGradient>
        <linearGradient id="pistonMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1f3f6" />
          <stop offset="0.5" stopColor="#aeb4bd" />
          <stop offset="1" stopColor="#6b717b" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe2b6" />
          <stop offset="0.5" stopColor="#e8a83f" />
          <stop offset="1" stopColor="#a7651c" />
        </linearGradient>
        <filter id="softShadow" x="-40%" y="-20%" width="180%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
          <feOffset dy="14" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.55" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <clipPath id="bodyClip">
          <path d="M178 120 C150 126 112 158 100 208 C94 234 86 256 82 282 C78 322 76 410 74 556 Q74 586 104 588 L316 588 Q346 586 346 556 C344 410 342 322 338 282 C334 256 326 234 320 208 C308 158 270 126 242 120 Z" />
        </clipPath>
        <clipPath id="labelClip">
          <rect x="96" y="250" width="228" height="298" rx="24" />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="210" cy="604" rx="142" ry="18" fill="#000" opacity="0.6" filter="blur(10px)" />

      {/* cap */}
      <g filter="url(#softShadow)">
        <path d="M170 96 L250 96 L246 122 Q210 132 174 122 Z" fill="#20232a" />
        <rect x="168" y="22" width="84" height="78" rx="12" fill="url(#capGrad)" />
        {Array.from({ length: 15 }).map((_, i) => (
          <rect key={i} x={172 + i * 5.4} y="26" width="2.6" height="70" rx="1.3" fill="#05060a" opacity="0.75" />
        ))}
        <rect x="168" y="22" width="84" height="12" rx="6" fill="#3d424b" opacity="0.85" />
        <ellipse cx="210" cy="24" rx="42" ry="7" fill="#454a54" />
      </g>

      {/* body */}
      <path
        d="M178 120 C150 126 112 158 100 208 C94 234 86 256 82 282 C78 322 76 410 74 556 Q74 586 104 588 L316 588 Q346 586 346 556 C344 410 342 322 338 282 C334 256 326 234 320 208 C308 158 270 126 242 120 Z"
        fill="url(#bodySilver)"
      />

      {/* body edge shading */}
      <g clipPath="url(#bodyClip)">
        <rect x="60" y="110" width="40" height="490" fill="#000" opacity="0.16" />
        <rect x="320" y="110" width="44" height="490" fill="#000" opacity="0.2" />
        <rect x="196" y="110" width="34" height="490" fill="#fff" opacity="0.1" />
        {/* animated sheen */}
        <g className="bottle-sheen">
          <polygon points="120,90 170,90 70,610 10,610" fill="#fff" opacity="0.10" />
          <polygon points="150,90 162,90 62,610 48,610" fill="#fff" opacity="0.16" />
        </g>
      </g>

      {/* moulded handle recess */}
      <g transform="rotate(-10 298 236)">
        <ellipse cx="298" cy="236" rx="29" ry="47" fill="#e9ebef" opacity="0.85" />
        <ellipse cx="298" cy="236" rx="23" ry="40" fill="url(#handleIn)" />
        <path d="M282 205 Q275 236 284 266" stroke="#fff" strokeWidth="3" fill="none" opacity="0.55" strokeLinecap="round" />
      </g>

      {/* ============ LABEL ============ */}
      <g clipPath="url(#labelClip)">
        <rect x="96" y="250" width="228" height="298" fill="url(#labelBlack)" />

        {/* red diagonal field */}
        <polygon points="96,250 324,250 324,332 142,472 96,472" fill="url(#labelRed)" />
        {/* white + silver diagonal stripes */}
        <polygon points="96,452 324,314 324,329 96,467" fill="#f2f3f6" />
        <polygon points="96,472 324,334 324,344 96,482" fill="#9ea4ad" />
        {/* bottom-left red corner */}
        <polygon points="96,548 200,548 96,478" fill="url(#labelRed)" />

        {/* top brand band */}
        <text x="210" y="266" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#f4f5f7" fontWeight="600">
          PACK&nbsp;&nbsp;QUALITY
        </text>
        <rect x="96" y="271" width="228" height="20" fill="#f3f4f7" />
        <text x="210" y="286" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="13" letterSpacing="3" fill="#c01320" fontWeight="700">
          VANSHWALLIA
        </text>

        {/* piston emblem */}
        <circle cx="210" cy="336" r="46" fill="#16181e" stroke="#8b9099" strokeWidth="2" />
        <circle cx="210" cy="336" r="46" fill="none" stroke="url(#labelRed)" strokeWidth="4" strokeDasharray="196 292" strokeLinecap="round" transform="rotate(-36 210 336)" />
        {/* gold splash */}
        <path d="M166 362 Q210 388 254 360" stroke="url(#goldGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M246 302 Q268 314 258 334" stroke="url(#goldGrad)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <circle cx="164" cy="356" r="3" fill="#e8a83f" />
        <circle cx="176" cy="370" r="2.2" fill="#f6cd83" />
        <circle cx="244" cy="352" r="2.8" fill="#e8a83f" />
        <circle cx="234" cy="374" r="2" fill="#f6cd83" />
        <circle cx="210" cy="382" r="2.6" fill="#e8a83f" />
        <circle cx="262" cy="318" r="2.2" fill="#f6cd83" />
        {/* piston */}
        <g>
          <rect x="192" y="300" width="36" height="46" rx="8" fill="url(#pistonMetal)" stroke="#3c4149" strokeWidth="1.2" />
          <rect x="192" y="312" width="36" height="3" fill="#454b54" />
          <rect x="192" y="319" width="36" height="3" fill="#454b54" />
          <rect x="192" y="326" width="36" height="3" fill="#454b54" />
          <circle cx="210" cy="338" r="5.4" fill="#23262c" stroke="#cfd3d9" strokeWidth="1.6" />
          <path d="M205 344 L215 344 L219 372 Q210 378 201 372 Z" fill="url(#pistonMetal)" stroke="#3c4149" strokeWidth="1" />
          <circle cx="210" cy="372" r="4" fill="#23262c" stroke="#cfd3d9" strokeWidth="1.2" />
        </g>

        {/* wordmark */}
        <text x="210" y="406" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="37" fontWeight="700" fontStyle="italic" fill="#f6f7f9" stroke="#0a0b0e" strokeWidth="1.4" paintOrder="stroke" letterSpacing="0.5">
          CAPTROL
        </text>
        <text x="210" y="433" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="25" fontWeight="700" fontStyle="italic" fill="#e9293a" stroke="#0a0b0e" strokeWidth="1.1" paintOrder="stroke" letterSpacing="1">
          ACTIVE
        </text>
        <rect x="146" y="438" width="128" height="16" rx="3" fill="#0c0d11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" />
        <text x="210" y="449.5" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.6" letterSpacing="1.8" fontWeight="700" fill="#e9ebef">
          ENGINE <tspan fill="#f6cd83">POWER</tspan> FORMULA
        </text>
        <text x="210" y="464" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.6" letterSpacing="0.8" fontStyle="italic" fill="#b9bdc6">
          UNLEASH MAXIMUM ENGINE PERFORMANCE
        </text>

        {/* spec row */}
        <g>
          <circle cx="119" cy="478" r="9" fill="none" stroke="#4db6e8" strokeWidth="1.4" />
          <text x="119" y="481.2" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="7.6" fontWeight="700" fill="#6fc6f0">
            BS6
          </text>
          <text x="277" y="478" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1" fill="#ffffff">
            API SM
          </text>

          <text x="165" y="503" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="27" fontWeight="700" fill="#ef3342">
            20W-40
          </text>
          <text x="294" y="504" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="29" fontWeight="700" fill="#ffffff">
            4T
          </text>
          <text x="165" y="516" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7.2" letterSpacing="1.3" fontWeight="600" fill="#cdd1d8">
            MOTORCYCLE ENGINE OIL
          </text>
        </g>

        {/* technology pills */}
        <rect x="126" y="521" width="168" height="15" rx="3.5" fill="#101a2e" stroke="#5d87c6" strokeWidth="0.8" />
        <text x="210" y="531.5" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1.6" fontWeight="700" fill="#dce8ff">
          SYNTHETIC TECHNOLOGY
        </text>
        <rect x="96" y="538" width="228" height="10" fill="#c01320" />
        <text x="210" y="546" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.2" letterSpacing="1.1" fontWeight="700" fill="#f6cd83">
          IMPROVED ACTIVBOND TECHNOLOGY
        </text>

        {/* label sheen */}
        <g className="bottle-sheen" style={{ animationDelay: "1.4s" }}>
          <polygon points="96,250 138,250 150,548 106,548" fill="#fff" opacity="0.06" />
        </g>
      </g>

      {/* label border + body outline */}
      <rect x="96" y="250" width="228" height="298" rx="24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" />
      <path
        d="M178 120 C150 126 112 158 100 208 C94 234 86 256 82 282 C78 322 76 410 74 556 Q74 586 104 588 L316 588 Q346 586 346 556 C344 410 342 322 338 282 C334 256 326 234 320 208 C308 158 270 126 242 120 Z"
        fill="none"
        stroke="rgba(20,22,26,0.55)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
