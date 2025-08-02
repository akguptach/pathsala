import BannerSection from './section/banner'
import RecommededSchools from './section/RecommededSchools'
import Institutions from './section/institutions'
import Topcourses from './section/top-courses'
import Trust from './section/trust'
import Featuredcourse from './section/featured-course'
import Community from './section/community'
import Howitworks from './section/how-it-works'
import Featureinstructor from './section/feature-instructor'
import Faq from './section/faq'
import Latestblog from './section/latest-blog'
import Testimonials from './section/testimonials'
import Footer from './footer'
import AddSchoolForm from '../../Pages/addSchool/AddSchoolFom'
import CustomSliser from '../../../core/common/slider/CustomSlider'

const HomeOne = () => {
  return (
    <div>
      <BannerSection />
      <RecommededSchools />
       {/* <CustomSliser/> */}
      {/* <Institutions /> */}
      {/* <Topcourses />
      <Trust/> */}
      <Featuredcourse />
      <Community />
      {/* <Howitworks /> */}
      {/* <Featureinstructor /> */}
      <Testimonials />
      <Faq/>
      <Latestblog />
      <Footer/>
    </div>
  )
}

export default HomeOne
