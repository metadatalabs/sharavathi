export default function ProductDrawing({ type }: { type: 'pipe' | 'pavers' | 'wall' | 'custom' }) {
    return <svg viewBox="0 0 180 120" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        {type === 'pipe' && <><ellipse cx="62" cy="71" rx="32" ry="37"/><ellipse cx="62" cy="71" rx="24" ry="29"/><path d="M48 38 112 15c18-6 38 7 41 29 3 19-5 36-18 41l-61 22M86 46l59-23M92 91l54-25"/></>}
        {type === 'pavers' && <><path d="m24 64 65-39 65 31-65 40Z M24 64v14l65 31 65-39V56 M89 96v13 M46 51l65 32 M68 38l65 32 M46 75l65-39 M68 86l65-39"/></>}
        {type === 'wall' && <><path d="M27 30h12v78H27z M137 14h12v78h-12z M39 38l98-15v60l-98 15z M39 58l98-15 M39 78l98-15 M27 30l7-5h12v13 M137 14l7-5h12v78l-7 5"/></>}
        {type === 'custom' && <><path d="m39 37 51-22 51 22-51 24Z M39 37v52l51 23 51-23V37 M90 61v51 M59 47v-9l31-13 31 13v9 M59 68l15 7v19l-15-7Z M105 75l16-7v19l-16 7Z"/><path strokeDasharray="3 5" d="M20 19v85M13 19h14M13 104h14"/></>}
    </svg>
}
