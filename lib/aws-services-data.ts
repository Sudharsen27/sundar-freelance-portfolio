export type AwsServiceItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

export const AWS_SERVICES: AwsServiceItem[] = [
  {
    id: "aws-consulting",
    title: "AWS Cloud Consulting",
    description:
      "Design scalable, secure and cost-optimized AWS cloud infrastructure for startups, SMEs and enterprise businesses.",
    tags: ["AWS", "Cloud", "Architecture", "Solutions"],
    features: ["Architecture Design", "Cloud Strategy", "Scalability", "Security"],
    ctaLabel: "Schedule Consultation",
    featured: true,
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    description:
      "Seamlessly migrate applications, databases and infrastructure to Amazon Web Services with minimal downtime.",
    tags: ["Migration", "AWS", "DevOps"],
    features: [
      "Migration Planning",
      "Zero Downtime",
      "Data Integrity",
      "Infrastructure Modernization",
    ],
    ctaLabel: "Plan My Migration",
  },
  {
    id: "docker",
    title: "Docker Containerization",
    description:
      "Containerize applications for portability, scalability and production deployments.",
    tags: ["Docker", "Containers", "Linux"],
    features: [
      "Docker Images",
      "Docker Compose",
      "Microservices",
      "Container Security",
    ],
    ctaLabel: "Containerize My App",
  },
  {
    id: "ecs-fargate",
    title: "Amazon ECS (Fargate)",
    description:
      "Deploy scalable containerized applications using Amazon ECS and AWS Fargate.",
    tags: ["AWS ECS", "Fargate", "Docker"],
    features: [
      "Serverless Containers",
      "Auto Scaling",
      "High Availability",
      "Managed Compute",
    ],
    ctaLabel: "Deploy on ECS",
    featured: true,
  },
  {
    id: "ecr",
    title: "Amazon ECR",
    description: "Private Docker registry for secure container image management.",
    tags: ["Amazon ECR", "Docker"],
    features: [
      "Image Registry",
      "Version Control",
      "Secure Images",
      "Deployment Ready",
    ],
    ctaLabel: "Set Up Registry",
  },
  {
    id: "rds",
    title: "Amazon RDS",
    description:
      "Managed PostgreSQL database solutions with automated backups and high availability.",
    tags: ["PostgreSQL", "RDS", "AWS"],
    features: ["Automated Backup", "Replication", "Scalability", "Performance"],
    ctaLabel: "Design My Database",
  },
  {
    id: "elasticache",
    title: "Amazon ElastiCache",
    description: "Improve application performance using Redis caching.",
    tags: ["Redis", "Caching", "AWS"],
    features: [
      "Low Latency",
      "High Performance",
      "Session Storage",
      "Distributed Cache",
    ],
    ctaLabel: "Add Caching Layer",
  },
  {
    id: "vpc",
    title: "Amazon VPC",
    description:
      "Secure cloud networking with VPCs, Public & Private Subnets, NAT Gateway and Security Groups.",
    tags: ["Networking", "AWS", "VPC"],
    features: [
      "Private Networking",
      "Security Groups",
      "Route Tables",
      "Internet Gateway",
    ],
    ctaLabel: "Secure My Network",
  },
  {
    id: "iam",
    title: "AWS IAM",
    description:
      "Identity and access management following AWS security best practices.",
    tags: ["IAM", "Security", "AWS"],
    features: [
      "Least Privilege",
      "Role Based Access",
      "Policies",
      "Authentication",
    ],
    ctaLabel: "Harden Access Control",
  },
  {
    id: "secrets-manager",
    title: "AWS Secrets Manager",
    description:
      "Securely store API keys, database credentials and application secrets.",
    tags: ["Secrets", "Security", "AWS"],
    features: [
      "Credential Management",
      "Encryption",
      "Rotation",
      "Compliance",
    ],
    ctaLabel: "Secure My Secrets",
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    description:
      "Provision repeatable AWS infrastructure using AWS CDK and CloudFormation.",
    tags: ["AWS CDK", "CloudFormation", "IaC"],
    features: [
      "Reusable Infrastructure",
      "Automation",
      "Version Control",
      "Deployment",
    ],
    ctaLabel: "Automate Infrastructure",
    featured: true,
  },
  {
    id: "monitoring",
    title: "Cloud Monitoring",
    description: "Application monitoring, centralized logging and alerting.",
    tags: ["CloudWatch", "Monitoring", "AWS"],
    features: ["Metrics", "Logs", "Alerts", "Dashboards"],
    ctaLabel: "Enable Monitoring",
  },
  {
    id: "cost-optimization",
    title: "AWS Cost Optimization",
    description:
      "Optimize AWS infrastructure to reduce unnecessary cloud spending while maintaining performance.",
    tags: ["Optimization", "AWS", "Cloud"],
    features: [
      "Cost Analysis",
      "Resource Optimization",
      "Savings",
      "Performance",
    ],
    ctaLabel: "Optimize Cloud Spend",
  },
];
