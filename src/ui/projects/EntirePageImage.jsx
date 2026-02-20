function EntirePageImage({ image, alt }) {
   return (
      <div className="self-center justify-self-center mx-13 sm:mx-0!">
         <img src={image} alt={alt} className="rounded-xl shadow" />
      </div>
   );
}

export default EntirePageImage;
