
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div>
      <Head>
        <title>skill</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <section className="navbar">
        <div className="logo">
            <h1>Portfolio</h1>
        </div>
        <ul>
            <li><a href="/">หน้าหลัก</a></li>
            <li><a href="/skill">skill</a></li>
            
        </ul>
    </section>
    <br/>
    <div className="box01">
    <div className="TEXT02">
        <br/>
        <h1> Skill </h1>
    </div>
    <section className="imagebox01">
        <div className="imagebox-items">
            <img className="image02" src="images/html-css.png"/>
            <h3>HTML/CSS</h3>
            <p>ระดับเริ่มต้น</p>
        </div>
        <div className="imagebox-items">
            <img className="image02" src="images/c++.png"/>
            <h3>C++</h3>
            <p>ระดับกลาง</p>
        </div>
        <div className="imagebox-items">
            <img className="image02" src="images/javascript.png"/>
            <h3>javascript</h3>
            <p>ระดับเริ่มต้น</p>
        </div>
    </section>

    <section className="imagebox02">
    <div className="imagebox-items">
        <img className="image02" src="images/PHP.png"/>
        <h3>PHP</h3>
        <p>ระดับเริ่มต้น</p>
    </div>

    <div className="imagebox-items">
        <img className="image02" src="images/Photoshop.png"/>
        <h3>Photoshop</h3>
        <p>ระดับกลาง</p>
    </div>
    </section>
</div>
</div>



  )
}
