"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

/* ---------------- TYPES ---------------- */

type CredentialType = "degree" | "certification" | "course";

interface Credential {
  id: number;
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  type: CredentialType;
  gradient: string;
  logoColors: {
    bg: string;
    text: string;
  };
}

/* ---------------- DATA ---------------- */

const credentials: Credential[] = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    issuer: "Kennesaw State University",
    issuerShort: "KSU",
    date: "December 2025",
    credentialId: "TR9SS5HL",
    verifyUrl:
      "https://www.parchment.com/u/award/195209d72fd849a71d83a701e3917e88",
    type: "degree",
    gradient: "from-yellow-400 to-yellow-600",
    logoColors: {
      bg: "bg-yellow-500",
      text: "text-zinc-900",
    },
  },

  /*
  Example future credentials

  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issuerShort: "AWS",
    date: "2026",
    credentialId: "XXXX",
    verifyUrl: "...",
    type: "certification",
    gradient: "from-orange-400 to-orange-600",
    logoColors: {
      bg: "bg-orange-500",
      text: "text-white"
    }
  }
  */
];

/* ---------------- LABELS ---------------- */

const typeLabel: Record<CredentialType, string> = {
  degree: "Academic Degree",
  certification: "Certification",
  course: "Course Certificate",
};

/* ---------------- COMPONENT ---------------- */

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Credentials & Certifications
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Verified academic achievements and professional certifications
          </p>
        </motion.div>

        {/* GRID */}

        <div className="flex flex-wrap justify-center gap-8">

          {credentials.map((cred, index) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group w-full max-w-sm"
            >
              {/* Glow */}

              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${cred.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl blur`}
              />

              {/* Card */}

              <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 flex flex-col items-center text-center gap-5">

                {/* Logo */}

                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className={`w-20 h-20 rounded-2xl ${cred.logoColors.bg} flex items-center justify-center shadow-lg`}
                >
                  <span
                    className={`text-2xl font-black tracking-tight ${cred.logoColors.text}`}
                  >
                    {cred.issuerShort}
                  </span>
                </motion.div>

                {/* Type */}

                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cred.gradient} text-zinc-900`}
                >
                  {typeLabel[cred.type]}
                </span>

                {/* Title */}

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-zinc-100 leading-snug">
                    {cred.title}
                  </h3>

                  <p className="text-sm text-zinc-400">{cred.issuer}</p>
                </div>

                {/* Divider */}

                <div className="w-full h-px bg-zinc-800" />

                {/* Metadata */}

                <div className="w-full space-y-2 text-sm">

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Issued</span>
                    <span className="text-zinc-300 font-medium">
                      {cred.date}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Credential ID</span>

                    <span className="font-mono text-xs text-cyan-400 tracking-wider">
                      {cred.credentialId}
                    </span>
                  </div>

                </div>

                {/* Verify */}

                <motion.a
                  href={cred.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-cyan-500 text-zinc-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium"
                >
                  <BadgeCheck className="w-4 h-4" />
                  Verify Credential
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </motion.a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}