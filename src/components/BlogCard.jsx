function BlogCard(props) {
  return (
    <>
      <div className="flex flex-col px-4 desktop:px-0 desktop:pb-6">
        <div className="flex flex-col gap-4">
          <img src={props.image} className="rounded-[16px] h-[212px] w-[343px] object-cover desktop:w-[590px] desktop:h-[360px]" alt={props.title}/>
          <div className="flex flex-col gap-2">
            <p className="py-1 px-3 text-body-2 text-brand-green bg-brand-green-soft rounded-full w-fit h-[30px]">{props.category}</p>
            <h4 className="text-headline-4 text-brown-600">{props.title}</h4>
            <p className="text-body-2 text-brown-400">{props.description}</p>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex gap-2 justify-center items-center">
              <img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt={props.author} className="w-6 h-6 rounded-[99px]" />
              <p className="text-body-2 text-brown-500">{props.author}</p>
            </div>
            <img src="src\assets\line240.svg"/>
            <p className="text-body-2 text-brown-400 flex justify-center items-center">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  )
}
// image, category, title, desctiption, author, date
export default BlogCard