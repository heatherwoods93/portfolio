import { FileText, Eye, MessageSquare, Pencil, Check } from "lucide-react";
import "./ReviewWorkflowCard.css";

const reviewSteps = [
  { label: "Submit", detail: "Task submitted", icon: FileText },
  { label: "Review", detail: "In review", icon: Eye },
  { label: "Feedback", detail: "Changes requested", icon: MessageSquare },
  { label: "Revision", detail: "Updated", icon: Pencil },
  { label: "Approved", detail: "Ready to publish", icon: Check, isComplete: true },
];

export default function ReviewWorkflowCard() {
  return (
    <div className="system-card review-workflow">
      <div className="system-card__main review-workflow__main">
        <p className="system-card__eyebrow text-tagline">Review Workflow</p>

        <div className="review-workflow__steps">
          {reviewSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="review-workflow__step" key={step.label}>
                <div className={`review-workflow__icon ${step.isComplete ? "is-complete" : ""}`}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                {index < reviewSteps.length - 1 && (
                  <span className="review-workflow__connector" aria-hidden="true" />
                )}

                <h3 className="text-tagline is-system">{step.label}</h3>
                <p className="text-small is-muted">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
