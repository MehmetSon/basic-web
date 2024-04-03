function Courses({course}){
    const {id,title,description,price,link,image} = course;
    return(
        <div className="course">

            <div>
                <img  src={image} className="course-img"></img>
                <h4 className="course-title">{title}</h4>
                <h5 className="course-des">{description}</h5>
                <h3 className="course-price">{price}</h3>
               <div className="course-link"> <a href={link} >Siteye Gitmek için tıklayınız</a></div>


            </div>


        </div>
    );
}

export default Courses;