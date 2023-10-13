

export default function ContactPage() {

return (
    <div className="flex flex-col-reverse lg:flex-row mt-20 ml-10">
        <div className="w-full lg:w-1/2">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.335622830171!2d-99.16856868509589!3d19.42737798688399!2m3!1f0!2f39.99999897793479!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce044d7d5d2b7f%3A0x5e8b7e7a6d3b7c5c!2sTorre%20Manacar!5e0!3m2!1ses-419!2smx!4v1625478785799!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div className="w-full lg:w-1/2">
        <h2 class="text-2xl mb-4 text-center">Quieres contactarme!!</h2>
            <form className="flex flex-col w-full max-w-lg mx-auto my-8">
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-white-900" htmlFor="name">Nombre</label>
                    <input className="px-4 py-2 border border-gray-900 rounded-lg" type="text" name="name" id="name" placeholder="Nombre" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-white-900" htmlFor="email">Correo</label>
                    <input className="px-4 py-2 border border-gray-900 rounded-lg" type="email" name="email" id="email" placeholder="Correo" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-white-900" htmlFor="message">Mensaje</label>
                    <textarea className="px-4 py-2 border border-gray-900 rounded-lg" name="message" id="message" rows="5" placeholder="
                    Mensaje"></textarea>
                </div>
                <button className="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-900 rounded-lg hover:bg-gray-800">Enviar</button>
            </form>
        </div>
    </div>
    
    );

}