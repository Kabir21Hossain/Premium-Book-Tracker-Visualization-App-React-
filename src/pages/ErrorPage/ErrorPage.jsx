import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
            <div className="text-center max-w-2xl">
                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-slate-400 text-lg">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition duration-300 font-semibold shadow-lg shadow-cyan-500/30"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl border border-slate-700 hover:border-purple-500 hover:text-purple-400 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative Glow */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default ErrorPage;