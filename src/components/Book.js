const Book = () => (
  <div className="w-full flex items-center justify-between py-4 px-5 bg-white rounder-md">
    <div className="flex flex-col">
      <p className="text-xs font-semibold text-gray-600">Science Fiction</p>
      <p className="font-bold text-gray-800">Dune</p>
      <p className="text-sm text-blue-400">Frank Herbert</p>
      <div className="flex items-center my-2">
        <button className="text-sm text-blue-400 pr-2" type="button">Comments</button>
        <button className="text-sm text-blue-400 px-2" type="button">Remove</button>
        <button className="text-sm text-blue-400 pl-2" type="button">Edit</button>
      </div>
    </div>
    <div className="flex items-center mr-32">
      <div className="flex items-center">
        <div className="flex items-center relative justify-center w-12 h-12 overflow-hidden rounded-full bg-blue-600">
          <div className="absolute top-0 left-0 w-7 h-7 bg-blue-200" />
          <div className="absolute w-10 h-10 rounded-full bg-white" />
        </div>
        <p className="ml-3 text-md text-gray-500">
          <span className="text-2xl text-gray-600 font-bold">8%</span>
          <br />
          Completed
        </p>
      </div>
      <div className="ml-20">
        <p className="text-md text-gray-400">CURRENT CHAPTER</p>
        <p className="my-1 text-gray-600">Chapter 3: &#34;A Lesson Learned&#34;</p>
        <button className="w-3-4 p-2 mt-1 flex items-center justify-center rounded-md bg-blue-600 text-white" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

export default Book;
