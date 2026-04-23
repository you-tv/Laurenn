import { useState } from "react";
import { AlertTriangle, Bug, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { analyticsTracker } from "../services/analytics-tracker";
import { motion, AnimatePresence } from "motion/react";

interface ReportProblemButtonProps {
  userId?: string;
  webinarId?: string;
}

export function ReportProblemButton({ userId, webinarId }: ReportProblemButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<'bug' | 'feature' | 'performance' | 'other'>('bug');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    analyticsTracker.track('report_problem', {
      userId,
      webinarId,
      metadata: {
        category,
        description,
        timestamp: new Date().toISOString()
      }
    });

    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setDescription('');
      setCategory('bug');
    }, 2000);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="gap-2 border-red-200 text-red-600 hover:bg-red-50"
      >
        <AlertTriangle className="h-4 w-4" />
        Signaler un problème
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            >
              <Card className="p-6">
                {!submitted ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <Bug className="h-5 w-5 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Signaler un problème</h3>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type de problème
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as any)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="bug">🐛 Bug / Erreur</option>
                          <option value="performance">⚡ Performance</option>
                          <option value="feature">💡 Demande de fonctionnalité</option>
                          <option value="other">📝 Autre</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                          rows={4}
                          placeholder="Décrivez le problème rencontré..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsOpen(false)}
                          className="flex-1"
                        >
                          Annuler
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer
                        </Button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Merci !</h3>
                    <p className="text-gray-600">Votre signalement a été envoyé à notre équipe.</p>
                  </div>
                )}
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
