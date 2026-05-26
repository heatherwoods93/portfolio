import { useState } from 'react'

import automationDashboardImage from '../assets/artifacts/automation-artifact.png'
import documentationDashboardImage from '../assets/artifacts/documentation-artifact.png'
import reviewDashboardImage from '../assets/artifacts/reviews-artifact.png'

const workflowFeatures = [
  {
    id: 'review-board',
    title: 'Role-based reviews',
    text: 'Dedicated responsibilities ensure complete coverage and clear accountability.',
    image: reviewDashboardImage,
    imageAlt: 'Review board dashboard showing role-based internal review assignments',
  },
  {
    id: 'automation',
    title: 'Automation where it helps',
    text: 'Streamlined handoffs, notifications, and status updates reduce manual work.',
    image: automationDashboardImage,
    imageAlt: 'Automation dashboard showing review workflow automation rules',
  },
  {
    id: 'documentation',
    title: 'Documentation that scales',
    text: 'SOPs and guides keep teams aligned and onboarding smooth.',
    image: documentationDashboardImage,
    imageAlt: 'Documentation dashboard showing centralized process documentation',
  },
]

function WorkflowSwitcher() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(workflowFeatures[0].id)
  const activeWorkflow = workflowFeatures.find(
    (feature) => feature.id === activeWorkflowId,
  ) ?? workflowFeatures[0]

  return (
    <div className="section-layout__grid">
      <div className="workflow-section__content">
        <div
          className="workflow-section__features workflow-switcher__controls"
          role="tablist"
          aria-label="Workflow system examples"
        >
          {workflowFeatures.map((feature) => (
            <button
              className={`workflow-feature workflow-switcher__button${
                feature.id === activeWorkflow.id ? ' is-active' : ''
              }`}
              id={`${feature.id}-tab`}
              key={feature.id}
              type="button"
              role="tab"
              aria-selected={feature.id === activeWorkflow.id}
              aria-controls="workflow-switcher-panel"
              onClick={() => setActiveWorkflowId(feature.id)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </button>
          ))}
        </div>
      </div>

      <div
        className="workflow-section__media workflow-switcher__media"
        id="workflow-switcher-panel"
        role="tabpanel"
        aria-labelledby={`${activeWorkflow.id}-tab`}
      >
        <div className="workflow-switcher__image-frame">
          {workflowFeatures.map((feature) => (
            <img
              className={`workflow-switcher__image${
                feature.id === activeWorkflow.id ? ' is-active' : ''
              }`}
              key={feature.id}
              src={feature.image}
              alt={feature.id === activeWorkflow.id ? feature.imageAlt : ''}
              aria-hidden={feature.id === activeWorkflow.id ? undefined : 'true'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkflowSwitcher
