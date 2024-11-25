import React, {useState, useEffect, useRef} from "react";

interface VoiceVisualizerProps {
    width?: string | number;
    height?: string | number;
    barColor?: string;
    backgroundColor?: string;
}

const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ width = "100%", height = 200, barColor = "#FFFFFF", backgroundColor = "transparent" }) => {
    const [isRecording, setIsRecording] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const dataArrayRef = useRef<Uint8Array | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true});
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaStreamSource(stream);

            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            source.connect(analyser);

            audioContextRef.current = audioContext;
            analyserRef.current = analyser;
            dataArrayRef.current = dataArray;

            setIsRecording(true);
            visualize();
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const stopRecording = () => {
        if (audioContextRef.current) {
            audioContextRef.current.close();
            cancelAnimationFrame(animationFrameRef.current!);
            setIsRecording(false);
        }
    };

    const visualize = () => {
        const canvas = canvasRef.current;
        if (!canvas || !analyserRef.current || !dataArrayRef.current) return;

        const canvasCtx = canvas.getContext("2d")!;
        const analyser = analyserRef.current;
        const dataArray = dataArrayRef.current;

        const draw = () => {
            canvasCtx.fillStyle = backgroundColor;
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

            analyser.getByteFrequencyData(dataArray);

            const barWidth = (canvas.width / dataArray.length) * 2.5;
            let x = 0;

            dataArray.forEach((barHeight) => {
                canvasCtx.fillStyle = barColor;
                canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
                x += barWidth + 1;
            });

            animationFrameRef.current = requestAnimationFrame(draw);
        };

        draw();
    };

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            stopRecording();
        };
    }, []);

    return (
        <div className="voice-visualizer" style={{width, height}}>
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    backgroundColor,
                }}
            />
            <div className="voice-visualizer__controls">
                {!isRecording ? (
                    <button onClick={startRecording}>
                        Start
                    </button>
                ) : (
                    <button onClick={stopRecording}>
                        Stop
                    </button>
                )}
            </div>
        </div>
    );
};

export default VoiceVisualizer;
