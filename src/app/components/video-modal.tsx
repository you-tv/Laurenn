import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoModal({ open, onOpenChange }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] p-0 bg-black border-0 overflow-hidden">
        <DialogTitle className="sr-only">Vidéo de démonstration Rainbow Webinar</DialogTitle>
        <DialogDescription className="sr-only">
          Regardez la vidéo de démonstration complète de Rainbow Webinar
        </DialogDescription>
        
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute -top-12 right-0 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video player - Aspect ratio 16:9 */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/XS9eE0UTA5c?autoplay=1&rel=0&modestbranding=1"
            title="Rainbow Webinar - Vidéo de démonstration"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}