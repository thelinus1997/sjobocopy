import Image from 'next/image';
import Button from './Button';

export default function TextImageSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left side - Image of a bird */}
          <div className="w-full aspect-square bg-gray-300 rounded-lg overflow-hidden relative">
            <Image 
              src="/birdfeed.png"
              alt="Bird feed"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#394287]">Tips</h2>
            <h3 className="text-2xl font-semibold text-[#394287]">Fågelmatning – så hjälper du våra vilda fåglar året runt</h3>
            <p className="text-[#394287]">
              Att mata fåglar är en uppskattad tradition i Sverige och en viktig insats för naturen. Under kalla månader hjälper fågelmatning våra småfåglar att överleva, samtidigt som det skapar liv och rörelse i trädgården.
            </p>
            <h4 className="text-xl font-semibold text-[#394287]">Vad ska man mata med?</h4>
            <p className="text-[#394287]">
              Vanliga favoriter är solrosfrön, jordnötter och talgbollar – energirik mat som uppskattas av arter som talgoxe, blåmes, rödhake och domherre. Även hirs, hampfrö och nigerfrö fungerar bra, särskilt för mindre arter som grönsiska och pilfink.
            </p>
            <h4 className="text-xl font-semibold text-[#394287]">När ska man börja mata?</h4>
            <p className="text-[#394287]">
              Enligt fågelexperten Niklas Aronsson är det bäst att börja mata redan under senhösten, gärna i november, så att fåglarna hinner hitta till matplatsen innan kylan kommer. Fortsätt gärna även under våren – särskilt för att hjälpa flyttfåglarna vid deras återkomst.
            </p>
            <h4 className="text-xl font-semibold text-[#394287]">Så skapar du en bra matplats:</h4>
            <ul className="list-disc list-inside text-[#394287] space-y-2">
              <li>Placera matningen nära buskar eller träd där fåglarna kan söka skydd.</li>
              <li>Håll rent runt matningen för att undvika sjukdomar.</li>
              <li>Variera maten – olika arter gillar olika frön och nötter.</li>
              <li>Se till att det alltid finns vatten tillgängligt, även på vintern.</li>
            </ul>
            <p className="text-[#394287]">
              Att mata fåglar handlar inte bara om omtanke – det ger också en närmare kontakt med naturen, mitt i vardagen.
            </p>
            <p className="text-[#394287]">
              Vill du veta mer om vårt sortiment för vilda fåglar eller få hjälp att välja rätt produkter? Kontakta oss gärna så hjälper vi dig gärna vidare.
            </p>
            <p className="text-sm italic text-[#394287]">
              Källa: Gabriella Ekström, Pet Scandinavia 3/23
            </p>
          </div>
        </div>
      </div>  
    </section>
  );
}
