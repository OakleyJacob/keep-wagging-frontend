import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const Home = () => {
  return (
   <>
    <div className='home-page'>
      <video width="320" height="240" controls>
        <source src="https://media.istockphoto.com/id/1259947988/es/v%C3%ADdeo/adorable-perro-bulldog-franc%C3%A9s-mirando-a-la-c%C3%A1mara-con-la-cabeza-ligeramente-inclinada.mp4?s=mp4-640x640-is&k=20&c=DLVm7WQLqKMCN1JyvPZecMojofQ0WY4JQThLpLDzvGw=" type="video/mp4">
        </source>
      </video>
      <UncontrolledCarousel
        items={[
          {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: "https://media.istockphoto.com/id/1259947988/es/v%C3%ADdeo/adorable-perro-bulldog-franc%C3%A9s-mirando-a-la-c%C3%A1mara-con-la-cabeza-ligeramente-inclinada.mp4?s=mp4-640x640-is&k=20&c=DLVm7WQLqKMCN1JyvPZecMojofQ0WY4JQThLpLDzvGw="
          },
          {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src: 'https://picsum.photos/id/456/1200/600'
          },
          {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src: 'https://picsum.photos/id/678/1200/600'
          }
        ]} >
      </UncontrolledCarousel>
    </div>
   </>
  )
}

export default Home
