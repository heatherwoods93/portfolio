import {
  FileText,
  Eye,
  MessageSquare,
  Pencil,
  Check,
  Brush,
  Accessibility,
  ClipboardList,
  Settings,
  Code2,
  Users,
} from "lucide-react";

export default function ReviewWorkflowArtifact() {
  return (
    <div className="review-artifact">
      <div className="review-artifact__flow">
        <WorkflowStep icon={FileText} title="Build Ready" />
        <Connector />

        <div className="review-artifact__review-group">
          <WorkflowStep icon={Eye} title="Review" text="Role-based QA" isComplete />

          <div className="review-artifact__branch" aria-hidden="true" />

          <div className="review-artifact__roles">
            <p className="review-artifact__roles-title">Review Roles</p>
            <Role icon={Brush} text="Design audit" />
            <Role icon={Accessibility} text="Accessibility checks" />
            <Role icon={ClipboardList} text="Content review" />
            <Role icon={Settings} text="Settings review" />
            <Role icon={Code2} text="Technical QA" />
          </div>
        </div>

        <Connector />
        <WorkflowStep icon={MessageSquare} title="Review Notes" />
        <Connector variant="double" />
        <WorkflowStep icon={Pencil} title="Revision" />
        <Connector />
        <WorkflowStep icon={Check} title="Launch" />
      </div>

      <div className="review-artifact__callout">
        <div className="review-artifact__callout-icon">
          <Users size={22} strokeWidth={1.8} />
        </div>
        <div>
          <h4>Shared visibility. Clear ownership.</h4>
          <p>
            Automated notifications, standardized checklists, and role-based reviews help
            make sure nothing gets missed.
          </p>
        </div>
      </div>
    </div>
  );
}

function WorkflowStep({ icon: Icon, title, text, variant, isComplete }) {
  return (
    <div
      className={[
        "review-artifact__step",
        variant ? `is-${variant}` : "",
        isComplete ? "is-complete" : "",
      ].join(" ")}
    >
      <Icon size={30} strokeWidth={1.8} />
      <p className="text-label">{title}</p>
      <p>{text}</p>
    </div>
  );
}

function Connector({ variant }) {
  if (variant === "double") {
    return (
      <span
        className="review-artifact__connector review-artifact__connector--double"
        aria-hidden="true"
      >
        <span className="review-artifact__connector-line is-forward" />
        <span className="review-artifact__connector-line is-back" />
      </span>
    );
  }

  return <span className="review-artifact__connector" aria-hidden="true" />;
}

function Role({ icon: Icon, text }) {
  return (
    <div className="review-artifact__role">
      <span className="review-artifact__role-check">
        <Check size={14} strokeWidth={2} />
      </span>
      <Icon size={20} strokeWidth={1.7} />
      <span>{text}</span>
    </div>
  );
}
