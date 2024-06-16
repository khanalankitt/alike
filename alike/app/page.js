import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container">
        <h2>Love Calculator</h2>
        <div className="part">
          <div className="left">
              <p>Date of birth</p>
              <input type="date" name="yourdate" required/>
              <Image
                src="/man.png"
                height={100}
                width={100}
              />
          </div>
          <div className="right">
            <p>Date of birth</p>
            <input type="date" name="theirdate" required/>
            <Image
                src="/woman.png"
                height={100}
                width={100}
              />
          </div>
        </div>
        <button>Calculate</button>
      </div>
    </>
  );
}
