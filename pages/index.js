import next from 'next'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
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
    <img className="image" src="/images/1234.png" align="right"/>
    <div className="box02" >
        <div className="TEXT01" >
            <br/>
            <h1 className="text"> ข้อมูลส่วนตัว </h1>
            <p>
                ชื่อ    : นาย ทุติย โฉสูงเนิน
                <br/>
                ชื่อเล่น : มาย
                <br/>
                อายุ   : 22 
                <br/>
                สาขาวิชาที่เรียน : สาขาระบบสารสนเทศ
            </p>
    
        </div>
        <div className="TEXT01" >
        <h1 className="text"> ติดต่อได้ที่ </h1>
        <p>
            E-mail   : thutiya.ch@gmail.com
            <br/>
            Facebook : <a href="https://www.facebook.com/profile.php?id=100004920397814">Thutiya Chosungnoen</a>
            <br/>
            เบอร์มือถือ   : 088-594-8177
            <br/>
        </p>
    
        </div>

    </div>

    <div className="TEXT01" >
        <br/>
        <h1 className="text"> สิ่งที่ชอบ และ งานอดิเรก </h1>
        <p>
            เพลงที่ชอบ  : Bury the Light 
            <br/>
            แนวหนังที่ชอบ : sci fi fantasy เช่น <a href="https://www.hotstar.com/th/channels/star-wars">star wars</a> , <a href="https://www.primevideo.com/search/ref=atv_sr_sug_6?phrase=star%20trek&ie=UTF8">star trek</a>
            <br/>
            งานอดิเรก   : เล่นเกม และ เล่นกับสัตว์เลี้ยง
            <br/>
        </p>

    </div>

    <div className="box02" >
        <div className="TEXT01" >
            <br/>
            <h1 className="text"> ประวัติการฝึกงาน และ โปรเจคที่ทำ </h1>
            <p>
                ฝึกงาน : ที่ IT ร้าน Area24 เมื่อปี่ 2017
                <br/>
                โปจเจค:
                <br/>
                1.โปรเจคจบ ม.ปลาย พัฒนาเกม ด้วย rpg maker mv เมื่อปี่ 2019
                <br/>      
                2.วิจัยระดับปริญญาตรี พัฒนา ระบบควบคุมตู้ปลาผ่านเว็บแอปพลิเคชันโดยใช้เทคโนโลยีอินเทอร์เน็ตของสรรพสิ่ง ปี่ 2022
            </p>
    
        </div>
        <div className="TEXT01" >
        <h1 className="text"> ผลการศึกษา </h1>
        <p>
            ปริญญาตรี     : GPA 3.54
            <br/>
            ม.ปลาย      : GPA 3.25
        </p>
    
        </div>

    </div>

</div>
    </div>


  )
}