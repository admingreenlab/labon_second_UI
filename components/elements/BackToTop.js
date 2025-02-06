
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                
                <div className="scroll-to-top-box">
                    <a href="#top" className="scroll-to-target scroll-to-top">Back to Top</a>
                    <div className="border-box"></div>
                </div>
            )}
        </>
    )
}