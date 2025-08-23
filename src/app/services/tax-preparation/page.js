import ServiceTemplate from "components/ServiceTemplate";

export default function TaxPreparationPage() {
  return (
    <ServiceTemplate
      title="Tax Preparation Services"
      description="Comprehensive tax preparation and planning services to minimize your tax liability and ensure compliance with all regulations."
      icon="📝"
      features={[
        {
          title: "Individual Tax Returns",
          description: "Complete preparation and filing of personal income tax returns."
        },
        {
          title: "Business Tax Returns",
          description: "Corporate, partnership, and LLC tax return preparation."
        },
        {
          title: "Tax Planning",
          description: "Strategic tax planning to minimize future tax liabilities."
        },
        {
          title: "IRS Representation",
          description: "Professional representation in case of audits or disputes."
        }
      ]}
      benefits={[
        {
          icon: "💸",
          title: "Tax Savings",
          description: "Maximize deductions and minimize tax liability"
        },
        {
          icon: "⚖️",
          title: "Compliance",
          description: "Ensure full compliance with tax laws"
        },
        {
          icon: "🛡️",
          title: "Audit Protection",
          description: "Professional support in case of audits"
        },
        {
          icon: "📅",
          title: "Timely Filing",
          description: "Avoid penalties with on-time filing"
        },
        {
          icon: "🔍",
          title: "Error-Free",
          description: "Accurate calculations and documentation"
        },
        {
          icon: "💡",
          title: "Expert Advice",
          description: "Professional guidance on tax matters"
        }
      ]}
      process={[
        {
          title: "Document Collection",
          description: "Gather all necessary financial documents and records."
        },
        {
          title: "Tax Analysis",
          description: "Comprehensive analysis of income, deductions, and credits."
        },
        {
          title: "Return Preparation",
          description: "Accurate preparation of all tax forms and schedules."
        },
        {
          title: "Review & Approval",
          description: "Thorough review with client before filing."
        },
        {
          title: "Electronic Filing",
          description: "Secure electronic filing with confirmation."
        }
      ]}
      pricing={[
        {
          name: "Individual",
          price: "$299-499",
          features: [
            "Personal tax return",
            "Up to 2 investment statements",
            "Basic deduction optimization",
            "E-filing included"
          ],
          popular: false
        },
        {
          name: "Business",
          price: "$599-899",
          features: [
            "Business tax return",
            "Multiple state filings",
            "Advanced tax planning",
            "Quarterly estimates",
            "Deduction maximization"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom Quote",
          features: [
            "Multiple entities",
            "International taxation",
            "Strategic tax planning",
            "Audit representation",
            "Year-round support"
          ],
          popular: false
        }
      ]}
    />
  );
}