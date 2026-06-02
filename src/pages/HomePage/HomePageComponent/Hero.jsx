import heroImg from '../../../assets/heroBook.png'
const Hero = () => {

    return (
        <div className="hero bg-gray-100 my-10 rounded-2xl p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImg} alt="heroImg" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                    <button className="btn bg-green-500 text-white px-4 py-2 mt-4 font-bold rounded-lg">View The List</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;