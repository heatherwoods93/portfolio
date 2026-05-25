import { FileText, Eye, MessageSquare, Pencil, Check } from "lucide-react";
import { Fragment } from "react";

const reviewSteps = [
  { label: "Submit", detail: "Task submitted", icon: FileText },
  { label: "Review", detail: "In review", icon: Eye },
  { label: "Feedback", detail: "Changes requested", icon: MessageSquare },
  { label: "Revision", detail: "Updated", icon: Pencil },
  { label: "Approved", detail: "Ready to publish", icon: Check, isComplete: true },
];

export default function ReviewWorkflowCard() {
  return (
    <div className="review-workflow">
      <div className="review-workflow__main">

        <div className="review-workflow__flow">
          <div className="review-workflow__flow-inner">
            {reviewSteps.map((step, index) => {
              const Icon = step.icon;
  
              return (
                <Fragment key={step.label}>
                  <div className="review-workflow__step">
                    <div className={`review-workflow__icon ${step.isComplete ? "is-complete" : ""}`}>
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-label">{step.label}</h3>
                    <p className="text-small is-muted">{step.detail}</p>
                  </div>

                  {index < reviewSteps.length - 1 && (
                    <span className="review-workflow__connector" aria-hidden="true" />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
