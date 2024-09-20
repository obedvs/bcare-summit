import Image from "next/image";

const Reasons = () => {
  return (
    <section className="py-16">
        <h1 className="text-6xl font-semibold tracking-tight sm:text-5xl text-center">¿Por qué <span className="font-bold bg-gradient-to-r from-[#34A5AB] to-[#6DFFD6] bg-clip-text text-transparent">B-care</span>?</h1>
        <article className="w-[60%] relative mx-auto mt-32 mb-24 rounded-3xl bg-gradient-to-r to-[#63b1f5] from-[#0d5b9f] p-20">
            <p className="w-[70%] text-xl text-slate-100/80 font-semibold leading-9">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae iciatis unde omnis iste natus error sit vyu</p>
            <img src="/reasons.png" className="absolute -top-24 -right-10" />
        </article>
    </section>
  );
};

export default Reasons;
