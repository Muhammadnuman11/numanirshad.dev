"use client";

export default function WhatsAppButton() {
    const phoneNumber = "923081062309"; // WhatsApp requires country code
    const message = "Hi Numan, I want to discuss a project with you.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:scale-110">

                {/* Icon */}
                <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="text-white w-16 h-16" />

                {/* Ping Animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            </div>

            {/* Tooltip */}
            <span className="absolute right-16 bottom-3 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                Chat on WhatsApp
            </span>
        </a>
    );
}