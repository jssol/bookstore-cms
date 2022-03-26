const Form = () => (
  <section className="absolute self-center mx-auto w-10/12 bottom-0 pt-4 mb-12 border-t-2 border-slate-200">
    <h2 className="text-slate-500 text-xl font-bold mb-2">ADD NEW BOOK</h2>
    <form className="w-full h-10 flex items-stretch justfiy-between">
      <input className="w-3/5 p-3 rounded-md text-slate-600 transition-all h-full block outline-1 outline-blue-100 focus:outline-blue-300" type="text" placeholder="Book title" />
      <input className="w-1/3 p-3 rounded-md text-slate-600 transition-all h-full block ml-4 outline-blue-100 focus:outline-blue-300" type="" placeholder="Author" />
      <button className="w-1/5 p-3 flex items-center justify-center rounded-md h-full block bg-blue-600 text-white font-semibold ml-4" type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
