import './Home.scss'
import React from 'react'

import HomeImg from '../img/HomeImg.jpg'

import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <div className='home'>


      {/* <h1> HOME </h1> */}

      <Container className='home-con'>

        <div className='img-con'>

          <img src={HomeImg} alt="" />

        </div>
        <div className='text-con'>

          <h2> Welcom ... </h2>

          <p>

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia tenetur modi eius. Illum cum eaque est alias nobis quas exercitationem, sunt assumenda vel? Atque doloribus eveniet distinctio incidunt quo?
            Inventore, doloribus! Molestias impedit tenetur voluptas at eaque quisquam sint veritatis iste. Vitae similique maiores fugiat perspiciatis distinctio dignissimos repellendus esse inventore! Dignissimos, blanditiis explicabo? Dolore laborum fugit exercitationem quidem!
            Provident nemo reprehenderit fugit veritatis deleniti sit recusandae nobis vitae explicabo, libero mollitia quaerat iusto adipisci eos? Consectetur pariatur sapiente aspernatur tenetur, at rem, magni temporibus perferendis minima, nisi perspiciatis.
            Enim architecto illo eligendi. Quaerat in provident, ratione atque cum fugit consectetur deserunt perspiciatis laborum totam harum quas iste facere repellat, optio eum, nihil quae. Provident vel laborum ducimus fugit.

          </p>

        </div>


      </Container>





    </div>
  )
}

export default Home