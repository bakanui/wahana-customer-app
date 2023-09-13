interface IProps {
    fill?: string;
    size?: string;
}
export const ArrowRight = (props: IProps) => {
    return(
        <svg width={props.size || "800px"} height={props.size || "800px"} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>arrow_right [#363]</title>
            <desc>Created with Sketch.</desc>
            <defs>
        </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -6559.000000)" fill={props.fill || "#000000"}>
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M375.127681,6399.29274 C374.737008,6398.90242 374.104537,6398.90242 373.714864,6399.29274 C373.324191,6399.68307 373.324191,6400.31497 373.714864,6400.7043 L380.149475,6407.14215 C380.464211,6407.45661 380.241398,6408.00167 379.79677,6408.00167 L365.016149,6408.00167 C364.464611,6408.00167 364,6408.44091 364,6408.99195 L364,6408.99594 C364,6409.54699 364.464611,6409.99821 365.016149,6409.99821 L379.79677,6409.99821 C380.241398,6409.99821 380.464211,6410.52829 380.149475,6410.84275 L373.68389,6417.29957 C373.293217,6417.68889 373.293217,6418.3188 373.68389,6418.70913 L373.68389,6418.70813 C374.073563,6419.09746 374.706034,6419.09746 375.096707,6418.70713 L383.41474,6410.39652 L383.41474,6410.39652 C384.195087,6409.61687 384.195087,6408.35206 383.41474,6407.57241 C383.233892,6407.39272 374.946832,6399.11206 375.127681,6399.29274" id="arrow_right-[#363]">
                        </path>
                    </g>
                </g>
            </g>
        </svg>
    );
}