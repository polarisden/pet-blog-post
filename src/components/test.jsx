function BlogCard(props) {
  return (
    <>
      <div className="flex flex-col pt-6 px-4 desktop:pt-[60px] desktop:px-[120px] desktop:pb-[80px]">
        <div className="flex flex-col gap-4">
          <img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg" className="rounded-[16px]" />
          <div className="flex flex-col gap-2">
            <p className="py-1 px-3 text-body-2 text-brand-green bg-brand-green-soft rounded-full w-[50px] h-[30px]">Cat</p>
            <h4 className="text-headline-4 text-brown-600">Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do</h4>
            <p className="text-body-2 text-brown-400">Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.</p>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex gap-2 justify-center items-center">
              <img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt="Thompson P." className="w-6 h-6 rounded-[99px]" />
              <p className="text-body-2 text-brown-500">Thomson P.</p>
            </div>
            <img src="src\assets\line240.svg"/>
            <p className="text-body-2 text-brown-400">11 September 2024</p>
          </div>
        </div>
      </div>
    </>
  )
}
// image, category, title, desctiption, author, date
export default BlogCard