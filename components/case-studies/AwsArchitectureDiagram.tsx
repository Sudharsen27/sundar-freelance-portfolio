"use client";

import { motion } from "framer-motion";

type ArchNode = {
  id: string;
  name: string;
  subtitle: string;
};

type ArchLayer = {
  id: string;
  label: string;
  nodes: readonly ArchNode[];
};

const REQUEST_PATH: ArchNode[] = [
  { id: "browser", name: "Browser", subtitle: "Client" },
  { id: "alb", name: "Application Load Balancer", subtitle: "Amazon ELB" },
  { id: "ecs", name: "Amazon ECS", subtitle: "Fargate" },
  { id: "api", name: "FastAPI Backend", subtitle: "API services" },
];

const DATA_PLANE: ArchNode[] = [
  { id: "rds", name: "Amazon RDS", subtitle: "PostgreSQL" },
  { id: "redis", name: "Amazon ElastiCache", subtitle: "Redis" },
];

const HIGHLIGHT_IDS = new Set(["ecs", "rds", "redis"]);

const SUPPORT_LANES: ArchLayer[] = [
  {
    id: "containers",
    label: "Container Pipeline",
    nodes: [
      { id: "docker", name: "Docker Images", subtitle: "Build artifacts" },
      { id: "ecr", name: "Amazon ECR", subtitle: "Registry" },
    ],
  },
  {
    id: "iac",
    label: "Infrastructure",
    nodes: [
      { id: "cdk", name: "AWS CDK", subtitle: "IaC" },
      { id: "cfn", name: "CloudFormation", subtitle: "Stacks" },
    ],
  },
  {
    id: "network",
    label: "Networking",
    nodes: [{ id: "vpc", name: "Amazon VPC", subtitle: "Network fabric" }],
  },
  {
    id: "security",
    label: "Security",
    nodes: [
      { id: "iam", name: "AWS IAM", subtitle: "Access control" },
      { id: "secrets", name: "AWS Secrets Manager", subtitle: "Secrets vault" },
    ],
  },
];

function AwsMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 14.5c1.8 1.3 4.4 2.1 7.1 2.1 1.9 0 3.9-.4 5.5-1.2.4-.2.8.2.5.6-1.6 2.1-5.1 3.4-8.7 3.4-3.4 0-6.4-1.2-8-3.1-.3-.3 0-.7.4-.5.1 0 .1 0 .2.1z"
        fill="#FF9900"
      />
      <path
        d="M16.8 13.2c.2-.3.1-.6-.2-.5-1.2.3-2.4.4-3.5.4-2.8 0-5.3-.7-7.4-1.9-.3-.2-.6.1-.5.4C6.6 14.3 10 16 14.1 16c1.1 0 2.2-.2 3.2-.5.2-.1.3-.2.3-.3.1-.3.1-.6-.1-.8-.2-.2-.5-.2-.7 0z"
        fill="#FF9900"
        opacity="0.85"
      />
      <rect x="4" y="4" width="16" height="8" rx="1.5" stroke="#FF9900" strokeWidth="1.4" />
      <path d="M4 8h16" stroke="#FF9900" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function NodeIcon({ id }: { id: string }) {
  const common = "h-5 w-5 sm:h-6 sm:w-6";
  switch (id) {
    case "browser":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 8h18" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6" cy="6" r="0.8" fill="currentColor" />
          <circle cx="8.5" cy="6" r="0.8" fill="currentColor" />
        </svg>
      );
    case "alb":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v4M7 21v-6M12 21v-8M17 21v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M5 11h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="7" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="17" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "ecs":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 9h4M7 12h6M7 15h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="17" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "api":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 7h8M8 12h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        </svg>
      );
    case "rds":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "redis":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 9.5 12 5l8 4.5-8 4.5L4 9.5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M4 12.5 12 17l8-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M4 15.5 12 20l8-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="9.5" r="1.2" fill="currentColor" />
        </svg>
      );
    case "docker":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="9" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
          <rect x="8" y="9" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
          <rect x="13" y="9" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
          <rect x="8" y="4" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M3 15h16c1.5 0 2.5 1 2.5 2.5S20.5 20 19 20H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "ecr":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        </svg>
      );
    case "cdk":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 4h8l4 4v12H4V4h4z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 4v4h8" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "cfn":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 6h12v12H6z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4 10h2M18 10h2M4 14h2M18 14h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "vpc":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" />
          <circle cx="8" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 12h4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "iam":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "secrets":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="15" r="1.2" fill="currentColor" />
        </svg>
      );
    default:
      return <AwsMark className={common} />;
  }
}

function ArchNodeCard({
  node,
  index,
  highlight = false,
}: {
  node: ArchNode;
  index: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      className={`relative flex min-w-[140px] flex-1 flex-col items-center gap-2 rounded-xl border px-3 py-3 text-center sm:min-w-[150px] sm:px-4 sm:py-4 ${
        highlight
          ? "border-[#FF9900]/45 bg-[#FF9900]/10 shadow-[0_0_28px_rgba(255,153,0,0.12)]"
          : "border-white/[0.1] bg-white/[0.03]"
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.02 }}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${
          highlight ? "bg-[#FF9900]/15 text-[#FFB84D]" : "bg-white/[0.06] text-accent-cyan"
        }`}
      >
        <NodeIcon id={node.id} />
      </div>
      <div>
        <p className="text-xs font-semibold text-text-primary sm:text-sm">{node.name}</p>
        <p className="mt-0.5 text-[10px] text-text-secondary sm:text-[11px]">{node.subtitle}</p>
      </div>
    </motion.div>
  );
}

function FlowArrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="flex shrink-0 items-center justify-center px-0.5 sm:px-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2, duration: 0.4 }}
      aria-hidden
    >
      <div className="relative flex h-8 w-5 items-center justify-center sm:h-10 sm:w-6">
        <motion.div
          className="h-full w-px bg-gradient-to-b from-[#FF9900]/20 via-[#FF9900]/70 to-[#FF9900]/20 sm:hidden"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        />
        <motion.div
          className="hidden h-px w-full bg-gradient-to-r from-[#FF9900]/20 via-[#FF9900]/80 to-[#FF9900]/20 sm:block"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
        />
        <svg
          className="absolute h-3 w-3 text-[#FF9900] sm:rotate-0 rotate-90"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M4 2l5 4-5 4V2z" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function AwsArchitectureDiagram() {
  const requestPath = REQUEST_PATH;
  const dataPlane = DATA_PLANE;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#FF9900]/20 bg-gradient-to-br from-[#0B1224] via-card/90 to-[#0A1628] p-4 shadow-card sm:p-6 lg:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #FF9900 0%, transparent 40%), radial-gradient(circle at 80% 80%, #06B6D4 0%, transparent 35%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #FF9900 1px, transparent 1px), linear-gradient(to bottom, #FF9900 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF9900]/35 bg-[#FF9900]/10">
            <AwsMark className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB84D]">
              AWS Cloud Architecture
            </p>
            <p className="text-sm text-text-secondary">
              Production-grade enterprise topology
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Amazon ECS", "Amazon RDS", "Amazon ElastiCache", "AWS CDK"].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#FF9900]/25 bg-[#FF9900]/10 px-2.5 py-1 text-[10px] font-medium text-[#FFB84D]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Primary request path → fans out to data plane */}
      <div className="relative z-10 mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
          Application request path
        </p>
        <div className="flex flex-col items-stretch gap-1 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap">
          {requestPath.map((node, i) => (
            <div key={node.id} className="flex flex-col items-stretch sm:flex-row sm:items-center sm:flex-1">
              <ArchNodeCard node={node} index={i} highlight={HIGHLIGHT_IDS.has(node.id)} />
              {i < requestPath.length - 1 ? <FlowArrow delay={i * 0.08} /> : null}
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-col items-center sm:mt-3">
          <FlowArrow delay={0.35} />
          <p className="mb-2 mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFB84D]/80">
            Data plane
          </p>
          <div className="grid w-full gap-3 sm:grid-cols-2 sm:gap-4">
            {dataPlane.map((node, i) => (
              <ArchNodeCard
                key={node.id}
                node={node}
                index={requestPath.length + i}
                highlight={HIGHLIGHT_IDS.has(node.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Supporting lanes */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-2">
        {SUPPORT_LANES.map((lane, laneIndex) => (
          <motion.div
            key={lane.id}
            className="rounded-xl border border-white/[0.07] bg-black/20 p-3 sm:p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 + laneIndex * 0.08 }}
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#FFB84D]/90">
              {lane.label}
            </p>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              {lane.nodes.map((node, i) => (
                <div key={node.id} className="flex flex-col items-stretch sm:flex-row sm:items-center sm:flex-1">
                  <ArchNodeCard node={node} index={i + laneIndex} />
                  {i < lane.nodes.length - 1 ? <FlowArrow delay={0.3 + i * 0.1} /> : null}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
