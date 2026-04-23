import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Play } from "lucide-react";
import rainbowLogo from "figma:asset/rainbow_webinar_logo.png";

// URL du GIF de démonstration Storylane
const demoGif = "https://files.catbox.moe/flef3g.gif";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const handleDemoClick = () => {
    window.open('https://app.storylane.io/share/njaxojcgqihp', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <img src={rainbowLogo} alt="Rainbow" className="h-10" />
            <div className="flex flex-col leading-tight">
              <DialogTitle className="text-2xl">Démo Rainbow Webinar</DialogTitle>
              <span className="text-xs text-gray-500">par Alcatel-Lucent Enterprise</span>
            </div>
          </div>
          <DialogDescription className="text-base">
            Découvrez Rainbow Webinar en action : une plateforme complète pour organiser des webinaires professionnels de qualité.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div 
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={handleDemoClick}
          >
            <img
              src={demoGif}
              alt="Aperçu de la démo Rainbow Webinar"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-[#5e2d91]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white rounded-full p-6">
                <Play className="h-12 w-12 text-[#5e2d91]" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}