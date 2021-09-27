import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
                profileSrc="https://m.economictimes.com/thumb/msid-81929836,width-1200,height-900,resizemode-4,imgsize-152651/mark-zuckerberg.jpg"
                title="Mark Zuckerberg" />
            <Story image="https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg"
                profileSrc="https://assets.vogue.com/photos/594be9149a441f6fe326781f/master/w_2560%2Cc_limit/00-lede-emma-watson-celeb-bty.jpg"
                title="Emma Watson" />
            <Story image="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/07/09/Pictures/_142fcb3e-c1cd-11ea-bed6-81066a26d6e8.jpg" profileSrc="https://i.pinimg.com/originals/21/b3/9f/21b39f4fbd64ffca9f3fdc56708edaf8.jpg"
                title="RDJ" />
            <Story image="https://www.fcbarcelona.com/photo-resources/2020/02/15/c9bf7f93-0b10-44cd-85d3-c4e31a6b24ff/mini_2020-02-15_FCBvsGETAFE_15.jpg?width=1200&height=750" profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/199385759_345470910277839_3988273979229903886_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=upTptPoKIyYAX9vPuUP&_nc_ht=scontent.fccu3-1.fna&oh=f24ec78d2ecb9e71b31c264a0fe476f3&oe=60D80E4F"
                title="Leo Messi" />
            <Story image="https://i.guim.co.uk/img/media/11ea8ecbace004bedb1065f1248359bb04e6d358/153_6_3767_2260/master/3767.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=94c0236c3d4dea9676263897730512f3" profileSrc="https://pbs.twimg.com/media/E95iq3LWYAQJQVI.jpg"
                title="Robert Lewandowski" />
        </div>
    )
}

export default StoryReel;
