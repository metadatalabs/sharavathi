type Use = 'drainage' | 'farm' | 'paving' | 'boundary'

export default function ProductUseIllustration({ type }: { type: Use }) {
    const labels = {
        drainage: 'Concrete culvert below a road, with water flowing through the pipe',
        farm: 'RCC pipe carrying drainage water from cultivated farmland into an open channel',
        paving: 'Concrete block driveway leading to a garage, with a pedestrian path beside the house',
        boundary: 'Precast concrete boundary wall with horizontal panels between posts and a gate',
    }
    const ink = '#536d80'
    return <svg viewBox="0 0 360 240" role="img" aria-label={labels[type]} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect width="360" height="240" fill="#e9eff3" />
        {type === 'drainage' && <>
            {/* Front elevation: the road sits above the buried pipe. */}
            <path d="M22 139 76 95h208l54 44v70H22Z" fill="#d1d9d6" />
            <path d="M22 139 76 104h208l54 35" stroke="#a4b6ad" strokeWidth="3" />
            <path d="M70 93h220v12H70Z" fill="#6d8291" stroke={ink} strokeWidth="1.5" />
            <path d="M74 93h212" stroke="#f9fafb" strokeWidth="2" />
            <path d="M86 91V79m27 12V79m134 12V79m27 12V79M83 79h34m126 0h34" stroke="#93a5b1" strokeWidth="2" />
            <path d="M133 79v-9l13-3 10-17h37l14 18 17 5v12h-91Z" fill="#fafbfc" stroke={ink} strokeWidth="2" />
            <path d="m151 66 8-12h15v12Zm27 0V54h12l10 12Z" fill="#a5c8dd" stroke={ink} strokeWidth="1.2" />
            <circle cx="151" cy="83" r="8" fill={ink} /><circle cx="207" cy="83" r="8" fill={ink} />
            <circle cx="151" cy="83" r="3" fill="#dce5eb" /><circle cx="207" cy="83" r="3" fill="#dce5eb" />
            <path d="M113 211v-83h134v83" fill="#c4d0d8" stroke={ink} strokeWidth="2" />
            <path d="m113 155-35 31v25h35m134-56 35 31v25h-35" fill="#b4c3cd" stroke={ink} strokeWidth="2" />
            <circle cx="180" cy="173" r="40" fill="#e5ebef" stroke={ink} strokeWidth="2" />
            <circle cx="180" cy="173" r="29" fill="#3c566a" />
            <path d="M153 184q27-7 54 0l26 56H127Z" fill="#81b8d7" />
            <path d="M180 198v27m-6-6 6 7 6-7M148 233l6-17m53 0 6 17" stroke="#f1f9fd" strokeWidth="2" />
            <path d="M40 189h20m241 0h19M59 157l6-8m230 8-6-8" stroke="#91a89c" strokeWidth="2" />
        </>}
        {type === 'farm' && <>
            <path d="M24 91h312v117H24Z" fill="#d4dfd1" />
            <path d="m24 155 80-64m-36 64 62-64m-18 64 44-64m0 64 26-64m18 64 8-64m36 64-10-64m54 64-28-64m72 64-46-64" stroke="#b1c5a6" strokeWidth="12" />
            {[0,1,2,3,4,5,6].map(i => <g key={i} stroke="#7b9d77" strokeWidth="2"><path d={`M${61+i*39} 112v-17m0 11-7-6m7 2 6-8M${46+i*44} 147v-18m0 10-7-6m7 3 7-9`} /></g>)}
            <path d="M24 159h312v46H24Z" fill="#bdcbb7" />
            <path d="M24 159h312" stroke="#93aa88" strokeWidth="3" />
            <path d="M131 203v-34c0-28 98-28 98 0v34" fill="#bac8cf" stroke={ink} strokeWidth="2" />
            <ellipse cx="180" cy="186" rx="39" ry="32" fill="#e4ebef" stroke={ink} strokeWidth="2" />
            <ellipse cx="180" cy="186" rx="29" ry="23" fill="#3c566a" />
            <path d="M153 194q27-6 54 0l29 46H124Z" fill="#81b8d7" />
            <path d="M180 207v22m-6-6 6 7 6-7M142 230l7-13m62 0 7 13" stroke="#f1f9fd" strokeWidth="2" />
            <path d="m128 211-20 29m124-29 20 29" stroke="#91a89c" strokeWidth="3" />
            <path d="M25 77h310" stroke="#b9cbbb" strokeWidth="1.5" />
        </>}
        {type === 'paving' && <>
            {/* A single front-facing perspective keeps the paving plane coherent. */}
            <path d="M24 149h312v76H24Z" fill="#cbdad1" />
            <path d="M75 72h213v89H75Z" fill="#f7f9fa" stroke={ink} strokeWidth="2" />
            <path d="m61 74 26-32h189l26 32Z" fill="#788f9f" stroke={ink} strokeWidth="2" />
            <path d="M75 79h213" stroke="#d5dfe5" strokeWidth="3" />
            <rect x="94" y="96" width="77" height="65" rx="1" fill="#c0cfda" stroke={ink} strokeWidth="2" />
            {[108,120,132,144].map(y => <path key={y} d={`M99 ${y}h67`} stroke="#91a6b5" strokeWidth="1.4" />)}
            <rect x="222" y="102" width="29" height="59" fill="#8eafc4" stroke={ink} strokeWidth="2" />
            <path d="M245 131v5" stroke="#f5f8fa" strokeWidth="2" />
            <rect x="187" y="102" width="22" height="25" fill="#bdd9e8" stroke={ink} strokeWidth="1.5" />
            <path d="M198 103v23m-10-12h20" stroke={ink} strokeWidth="1.2" />
            {/* Both ground planes converge towards the same horizon point. */}
            {([
                { left:94, right:171, fill:'#bec9cf', joint:'#879da9', columns:5 },
                { left:222, right:251, fill:'#d6c6aa', joint:'#ad9f89', columns:2 },
            ]).map(({ left, right, fill, joint, columns }) => {
                const horizon = { x:180, y:70 }
                const depth = [162,169,177,187,199,213,229]
                const project = (x:number, y:number) => horizon.x + (x-horizon.x)*(y-horizon.y)/(162-horizon.y)
                return <g key={left}>
                    <path d={`M${left} 162H${right}L${project(right,229)} 229H${project(left,229)}Z`} fill={fill} stroke={joint} strokeWidth="1.5" />
                    {depth.slice(1,-1).map(y => <path key={y} d={`M${project(left,y)} ${y}H${project(right,y)}`} stroke={joint} strokeWidth="1" />)}
                    {depth.slice(0,-1).map((y,row) => Array.from({length:columns},(_,col) => {
                        const t=(col+(row%2 ? .5 : 1))/columns
                        if(t>=1) return null
                        const x=left+(right-left)*t
                        return <path key={`${row}-${col}`} d={`M${project(x,y)} ${y} ${project(x,depth[row+1])} ${depth[row+1]}`} stroke={joint} strokeWidth="1" />
                    }))}
                </g>
            })}
            <path d="M285 180v-33m23 40v-30" stroke="#8aa393" strokeWidth="2" />
            <ellipse cx="286" cy="139" rx="17" ry="24" fill="#a8c0b1" /><ellipse cx="308" cy="153" rx="13" ry="20" fill="#b6cbbf" />
        </>}
        {type === 'boundary' && <>
            {/* Wall elevation makes panels and supporting posts unambiguous. */}
            <path d="M23 167h314v52H23Z" fill="#cbdad1" />
            <path d="M131 72h139v101H131Z" fill="#f7f9fa" stroke={ink} strokeWidth="1.6" />
            <path d="m119 73 25-32h113l25 32Z" fill="#788f9f" stroke={ink} strokeWidth="1.6" />
            <rect x="189" y="94" width="30" height="57" fill="#91afc2" stroke={ink} strokeWidth="1.5" />
            <rect x="143" y="91" width="29" height="27" fill="#bdd9e8" stroke={ink} strokeWidth="1.5" />
            <path d="M157 92v25m-13-13h27" stroke={ink} />
            <path d="M65 161V87m-1 30-14-16" stroke="#829b8b" strokeWidth="4" />
            <path d="M42 99c-19-19-1-43 16-39 8-25 41-15 38 7 21 8 15 39-9 37-13 14-33 12-45-5Z" fill="#aec5b6" />
            <rect x="31" y="137" width="165" height="65" fill="#c4d0d8" stroke={ink} strokeWidth="1.8" />
            <rect x="268" y="137" width="61" height="65" fill="#c4d0d8" stroke={ink} strokeWidth="1.8" />
            {[153,169,185].map(y => <path key={y} d={`M31 ${y}h165m72 0h61`} stroke="#8fa4b2" strokeWidth="1.5" />)}
            <rect x="203" y="143" width="59" height="59" fill="#e4ebed" stroke={ink} strokeWidth="2" />
            {[213,223,233,243,253].map(x => <path key={x} d={`M${x} 145v54`} stroke="#7f96a5" strokeWidth="2" />)}
            <path d="M204 180h57" stroke={ink} strokeWidth="2" />
            {[29,84,139,194,264,327].map(x => <g key={x}><rect x={x} y="129" width="8" height="77" fill="#edf2f5" stroke={ink} strokeWidth="1.7" /><path d={`M${x-2} 129h12`} stroke={ink} strokeWidth="2" /></g>)}
            <path d="M203 205h59l25 35h-77Z" fill="#c4cdd2" />
            <path d="M20 207h174m77 0h69" stroke="#a8bcb0" strokeWidth="2" />
        </>}
    </svg>
}
