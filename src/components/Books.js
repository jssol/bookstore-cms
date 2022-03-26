import Form from './Form';

const Books = () => (
  <main className="w-full h-screen overflow-hidden bg-gray-100 flex flex-col items-center">
    <section className="mt-5 max-h-3/5 w-10/12 overflow-y-auto">
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
          <div className=" ml-20">
            <p>CURRENT CHAPTER</p>
            <p>Chapter 3: &#34;A Lesson Learned&#34;</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </section>
    <Form />
  </main>
);

export default Books;
