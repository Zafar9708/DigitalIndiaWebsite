import ServiceTemplate from "components/ServiceTemplate";


export default function BookkeepingPage() {
  return (
    <ServiceTemplate
      title="Bookkeeping Services"
      description="Professional bookkeeping services to keep your financial records accurate, organized, and compliant with regulatory standards."
      icon="📊"
      features={[
        {
          title: "Daily Transaction Recording",
          description: "Accurate recording of all financial transactions including sales, purchases, receipts, and payments."
        },
        {
          title: "Accounts Reconciliation",
          description: "Regular reconciliation of bank accounts, credit cards, and other financial accounts."
        },
        {
          title: "Financial Statement Preparation",
          description: "Preparation of balance sheets, income statements, and cash flow statements."
        },
        {
          title: "Chart of Accounts Management",
          description: "Customized chart of accounts tailored to your business needs."
        }
      ]}
      benefits={[
        {
          icon: "💰",
          title: "Cost Savings",
          description: "Reduce accounting costs by outsourcing to experts"
        },
        {
          icon: "⏱️",
          title: "Time Efficiency",
          description: "Save time focusing on your core business operations"
        },
        {
          icon: "📈",
          title: "Better Decisions",
          description: "Make informed decisions with accurate financial data"
        },
        {
          icon: "🛡️",
          title: "Compliance",
          description: "Stay compliant with tax laws and regulations"
        },
        {
          icon: "🔍",
          title: "Error Detection",
          description: "Early detection of financial discrepancies"
        },
        {
          icon: "📊",
          title: "Real-time Insights",
          description: "Access to real-time financial performance metrics"
        }
      ]}
      process={[
        {
          title: "Initial Assessment",
          description: "We analyze your current financial processes and identify areas for improvement."
        },
        {
          title: "System Setup",
          description: "Implementation of customized bookkeeping systems and software."
        },
        {
          title: "Data Migration",
          description: "Secure transfer of existing financial data to new systems."
        },
        {
          title: "Ongoing Management",
          description: "Regular bookkeeping maintenance and financial reporting."
        },
        {
          title: "Monthly Review",
          description: "Comprehensive monthly financial reviews and performance analysis."
        }
      ]}
      pricing={[
        {
          name: "Basic",
          price: "$299/month",
          features: [
            "Up to 50 transactions",
            "Monthly financial reports",
            "Bank reconciliation",
            "Basic support"
          ],
          popular: false
        },
        {
          name: "Professional",
          price: "$599/month",
          features: [
            "Up to 200 transactions",
            "Weekly financial reports",
            "Advanced reconciliation",
            "Priority support",
            "Tax preparation support"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$999/month",
          features: [
            "Unlimited transactions",
            "Real-time reporting",
            "Full financial management",
            "24/7 dedicated support",
            "CFO advisory included"
          ],
          popular: false
        }
      ]}
    />
  );
}