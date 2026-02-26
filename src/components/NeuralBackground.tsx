export default function NeuralBackground() {
    return (
        <div className="fixed inset-0 neural-bg pointer-events-none z-0 overflow-hidden">
            {/* Neural nodes */}
            <div className="neural-node w-1 h-1 top-[10%] left-[10%] opacity-40 animate-twinkle" />
            <div className="neural-node w-1 h-1 top-[20%] left-[30%] opacity-30 animate-twinkle" style={{ animationDelay: "1s" }} />
            <div className="neural-node w-1.5 h-1.5 top-[40%] left-[15%] opacity-20 animate-twinkle" style={{ animationDelay: "2s" }} />
            <div className="neural-node w-1 h-1 top-[60%] left-[25%] opacity-30 animate-twinkle" style={{ animationDelay: "0.5s" }} />
            <div className="neural-node w-1 h-1 top-[80%] left-[10%] opacity-20 animate-twinkle" style={{ animationDelay: "3s" }} />
            <div className="neural-node w-1 h-1 top-[15%] left-[60%] opacity-30 animate-twinkle" style={{ animationDelay: "1.5s" }} />
            <div className="neural-node w-1.5 h-1.5 top-[35%] left-[80%] opacity-20 animate-twinkle" style={{ animationDelay: "2.5s" }} />
            <div className="neural-node w-1 h-1 top-[70%] left-[75%] opacity-40 animate-twinkle" style={{ animationDelay: "0.2s" }} />
            <div className="neural-node w-1 h-1 top-[90%] left-[90%] opacity-30 animate-twinkle" style={{ animationDelay: "3.5s" }} />

            {/* Neural lines */}
            <div className="neural-line h-[1px] w-[20%] top-[15%] left-[10%] rotate-12 opacity-20" />
            <div className="neural-line h-[1px] w-[15%] top-[40%] left-[15%] -rotate-45 opacity-10" />
            <div className="neural-line h-[1px] w-[25%] top-[60%] left-[25%] rotate-12 opacity-15" />
            <div className="neural-line h-[1px] w-[30%] top-[20%] left-[50%] rotate-6 opacity-10" />
            <div className="neural-line h-[1px] w-[20%] top-[70%] left-[60%] -rotate-12 opacity-20" />
            <div className="neural-line h-[1px] w-[10%] top-[35%] left-[80%] rotate-45 opacity-15" />

            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-20 animate-float-slow"
                style={{
                    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNzQsIDExMCwgODUsIDAuMDUpIi8+PC9zdmc+")`
                }}
            />
        </div>
    );
}
