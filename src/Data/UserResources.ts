export const UserResources = {
  success: true,

  status_code: 200,

  message: "Role fetched successfully",

  result: {
    id: 1578,

    role_name: "UI/UX",

    status: "active",

    created_by: {
      firstName: "Tom",

      lastName: "Smith",
    },

    customer_id: 715,

    createdAt: "2024-09-27T11:18:50.142Z",

    updatedAt: "2024-12-30T04:26:58.571Z",

    deletedAt: null,

    resources: [
      {
        resource_id: 50,

        resource_name: "Account Setup",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Account+Setup.svg",

        route: null,

        order: 1,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 65,

            resource_name: "Profile Configuration",

            description: null,

            status: 1,

            parent_id: 50,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Profile+Configuration.svg",

            route: null,

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 67,

                resource_name: "On-boarding Questionnaire",

                description: null,

                status: 1,

                parent_id: 65,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

                route: "/onboarding-questionnaire",

                order: 1,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 68,

                resource_name: "Company Structure",

                description: null,

                status: 1,

                parent_id: 65,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Company+Structure.svg",

                route: "/crm/company-structure",

                order: 2,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 66,

            resource_name: "Access Management",

            description: null,

            status: 1,

            parent_id: 50,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Access+Management.svg",

            route: null,

            order: 2,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 69,

                resource_name: "Role Management",

                description: null,

                status: 1,

                parent_id: 66,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/CRM.svg",

                route: "/crm/role-management",

                order: 1,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 70,

                resource_name: "User Management",

                description: null,

                status: 1,

                parent_id: 66,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/CRM.svg",

                route: "/crm/user-management",

                order: 2,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 49,

            resource_name: "About GoTrust",

            description: null,

            status: 1,

            parent_id: 50,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/About+GoTrust.svg",

            route: "/about-gotrust",

            order: 3,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 217,

        resource_name: "Theme",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Blogs.svg",

        route: null,

        order: 1,

        createdAt: "2024-02-23T20:37:53.679Z",

        updatedAt: "2024-02-23T20:37:53.679Z",

        deletedAt: null,

        children: [
          {
            resource_id: 218,

            resource_name: "Customization",

            description: null,

            status: 1,

            parent_id: 217,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Blogs.svg",

            route: "/customization",

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 52,

        resource_name: "Data Mapping",

        description:
          "Visualize and document your data processing activities to ensure compliance with regulatory obligations and enhance data governance.",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Data+Mapping.svg",

        route: null,

        order: 4,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 71,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 52,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/privacy/ropa-dashboard",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 72,

            resource_name: "Task Overview",

            description: null,

            status: 1,

            parent_id: 52,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/privacy/ropa/",

            order: 2,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 181,

            resource_name: "PII Inventory\n",

            description: null,

            status: 1,

            parent_id: 52,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

            route: "/privacy/ropa/pii-list",

            order: 3,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 190,

            resource_name: "Unstructured Data Inventory",

            description: null,

            status: 1,

            parent_id: 52,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

            route: "/privacy/ropa/unstructured-data-inventory",

            order: 4,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 206,

            resource_name: "Data Catalogue-C",

            description: null,

            status: 1,

            parent_id: 52,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

            route: "/settings/services/service-entity",

            order: 5,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 214,

                resource_name: "Structure",

                description: null,

                status: 1,

                parent_id: 206,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

                route: "/settings/services/service-entity",

                order: 1,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 215,

                resource_name: "Unstructure",

                description: null,

                status: 1,

                parent_id: 206,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

                route: "/settings/services/service-entity/unstructure",

                order: 2,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 220,

            resource_name: "Data Catalogue-O",

            description: null,

            status: 1,

            parent_id: 52,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

            route: "/ropa/data-catalogue/structure/v0",

            order: 6,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 221,

                resource_name: "Structure",

                description: null,

                status: 1,

                parent_id: 220,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

                route: "/ropa/data-catalogue/structure/v0",

                order: 1,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 222,

                resource_name: "Unstructure",

                description: null,

                status: 1,

                parent_id: 220,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

                route: "/ropa/data-catalogue/unstructure/v0",

                order: 2,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },
        ],
      },

      {
        resource_id: 53,

        resource_name: "Policy Management",

        description:
          "Centralization and tracking of privacy and security policies. Ensure consistent adherence to regulatory requirements across your organization",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Policy+Management.svg",

        route: null,

        order: 5,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 82,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 53,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/privacy/privacy-policy/",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 83,

            resource_name: "Task Overview",

            description: null,

            status: 1,

            parent_id: 53,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/privacy/privacy-policy/policy",

            order: 2,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 54,

        resource_name: "Data Subject Rights Management",

        description:
          "Manage and fulfill requests related to individual data rights, ensuring compliance with regulations and enhancing customer trust.",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Data+Subject+Rights+Management.svg",

        route: null,

        order: 6,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 182,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 54,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/data-subject-rights",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 183,

            resource_name: "Task Overview",

            description: null,

            status: 1,

            parent_id: 54,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/data-subject-rights/task-overview",

            order: 2,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 94,

            resource_name: "DSR Lab",

            description: null,

            status: 1,

            parent_id: 54,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Lab+(repetitive).svg",

            route: "/data-subject-rights/lab",

            order: 3,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 97,

                resource_name: "DSR Report",

                description: null,

                status: 1,

                parent_id: 94,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Breach+Reporting.svg",

                route: "/data-subject-rights/lab/report",

                order: 3,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 185,

                resource_name: "DSR Form Repository",

                description: null,

                status: 1,

                parent_id: 94,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/data-subject-rights/lab/form-repository",

                order: 4,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 186,

                resource_name: "DSR Email Templates",

                description: null,

                status: 1,

                parent_id: 94,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/data-subject-rights/lab/email-templates",

                order: 5,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 187,

                resource_name: "DSR Retention Schedule",

                description: null,

                status: 1,

                parent_id: 94,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

                route: "/data-subject-rights/lab/retention-schedule",

                order: 6,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 188,

                resource_name: "Workflow",

                description: null,

                status: 1,

                parent_id: 94,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Company+Structure.svg",

                route: "/data-subject-rights/lab/workflow",

                order: 7,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },
        ],
      },

      {
        resource_id: 55,

        resource_name: "Assessment Management",

        description:
          "Identify, evaluate, and mitigate potential risks to ensure compliance with data protection regulations and maintain a proactive security posture.",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

        route: null,

        order: 7,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 101,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 55,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/assessment-management",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 102,

            resource_name: "Task Overview",

            description: null,

            status: 1,

            parent_id: 55,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/assessment-management/task-overview",

            order: 2,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 126,

            resource_name: "Impact Assessment",

            description: null,

            status: 1,

            parent_id: 55,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

            route: null,

            order: 4,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 127,

                resource_name: "Privacy Impact Assessment",

                description: null,

                status: 1,

                parent_id: 126,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/assessment/privacy/pia",

                order: 1,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 128,

                resource_name: "Privacy by Design Assessment",

                description: null,

                status: 1,

                parent_id: 126,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/assessment/privacy/pda",

                order: 2,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 129,

                resource_name: "Legitimate Interests Assessment",

                description: null,

                status: 1,

                parent_id: 126,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/assessment/privacy/lia",

                order: 3,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 130,

                resource_name: "Transfer Impact Assessment",

                description: null,

                status: 1,

                parent_id: 126,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/assessment/privacy/tia",

                order: 4,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 131,

            resource_name: "EU AI Assessment",

            description: null,

            status: 1,

            parent_id: 55,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

            route: null,

            order: 5,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 165,

        resource_name: "Universal Consent Management",

        description:
          "Implement a robust consent management system that enables transparent data usage practices and complies with global regulations.\nhas context menu\nThanksI like itLooks good has context menu",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

        route: null,

        order: 8,

        createdAt: "2024-02-23T20:37:53.679Z",

        updatedAt: "2024-02-23T20:37:53.679Z",

        deletedAt: null,

        children: [
          {
            resource_id: 166,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/universal-consent-management",

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 191,

            resource_name: "Subject Consent Types",

            description: null,

            status: 1,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726485814051-794819299.png",

            route: "/universal-consent-management/subject-consent-types",

            order: 2,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 192,

            resource_name: "Subject Consent List",

            description: null,

            status: 1,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1726485858186-722462130.png",

            route: "/universal-consent-management/subject-consent-list",

            order: 3,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 194,

            resource_name: "Source",

            description: null,

            status: 1,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Lab+(repetitive).svg",

            route: "/universal-consent-management/source",

            order: 5,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [
              {
                resource_id: 198,

                resource_name: "Form",

                description: null,

                status: 1,

                parent_id: 194,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866662061-272198995.png",

                route: "/universal-consent-management/source/form",

                order: 1,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 195,

            resource_name: "UCM Lab",

            description: null,

            status: 1,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Lab+(repetitive).svg",

            route: "/universal-consent-management/ucm-lab",

            order: 6,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [
              {
                resource_id: 196,

                resource_name: "Processing Category",

                description: null,

                status: 1,

                parent_id: 195,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route:
                  "/universal-consent-management/ucm-lab/processing-category",

                order: 1,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 178,

                resource_name: "Processing Purpose",

                description: null,

                status: 1,

                parent_id: 195,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866662061-272198995.png",

                route:
                  "/universal-consent-management/ucm-lab/processing-purpose",

                order: 2,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 179,

                resource_name: "Consent Purpose",

                description: null,

                status: 1,

                parent_id: 195,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866551382-850451789.png",

                route: "/universal-consent-management/ucm-lab/consent-purpose",

                order: 3,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 197,

                resource_name: "PII Label",

                description: null,

                status: 1,

                parent_id: 195,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/universal-consent-management/ucm-lab/pii",

                order: 4,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 193,

                resource_name: "Consent Collection Builder",

                description: null,

                status: 1,

                parent_id: 195,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726555007115-857206622.png",

                route: "/universal-consent-management/ucm-lab/templates",

                order: 5,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 167,

                resource_name: "Preference Form",

                description: null,

                status: 1,

                parent_id: 195,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

                route:
                  "/universal-consent-management/ucm-lab/preference-center",

                order: 6,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 180,

            resource_name: "Custom Parameters",

            description: null,

            status: 0,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866615970-927061977.png",

            route: "/universal-consent-management/custom-parameters",

            order: 8,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 169,

            resource_name: "Consent Upload",

            description: null,

            status: 0,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/universal-consent-management/consent-uploads",

            order: 9,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 168,

            resource_name: "Consent Collection",

            description: null,

            status: 0,

            parent_id: 165,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866315551-859061926.png",

            route: "/universal-consent-management/form-center",

            order: 10,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 199,

        resource_name: "Universal Control Framewok",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866662061-272198995.png",

        route: null,

        order: 8,

        createdAt: "2024-02-23T20:37:53.679Z",

        updatedAt: "2024-02-23T20:37:53.679Z",

        deletedAt: null,

        children: [
          {
            resource_id: 200,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 199,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/uploads/1725866662061-272198995.png",

            route: "/universal-control-system",

            order: 9,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 201,

            resource_name: "Improvements",

            description: null,

            status: 1,

            parent_id: 199,

            icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

            route: "/universal-control-system/improvements",

            order: 10,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 173,

        resource_name: "Cookie Consent Management",

        description:
          "Full control over cookies used on your website by managing consent preferences, tracking usage, and ensuring compliance with global data protection regulations",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

        route: null,

        order: 9,

        createdAt: "2024-02-23T20:37:53.679Z",

        updatedAt: "2024-02-23T20:37:53.679Z",

        deletedAt: null,

        children: [
          {
            resource_id: 174,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 173,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/cookie-consent-management",

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 175,

            resource_name: "Cookie Consent Domain",

            description: null,

            status: 1,

            parent_id: 173,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/cookie-consent-management/cookie-consent-domain",

            order: 2,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 56,

        resource_name: "Vendor Risk Management",

        description:
          "Assess and mitigate risks associated with third-party vendors to protect your organization and maintain compliance with industry standards.",

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Vendor+Risk+Management.svg",

        route: null,

        order: 10,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 135,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 56,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/vrm/dashboard",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 136,

            resource_name: "Task Overview",

            description: null,

            status: 1,

            parent_id: 56,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: "/vrm/task-overview",

            order: 2,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 137,

            resource_name: "VRM Lab",

            description: null,

            status: 1,

            parent_id: 56,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Lab+(repetitive).svg",

            route: "/vrm/lab",

            order: 3,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [
              {
                resource_id: 139,

                resource_name: "Vendor Assessment Templates",

                description: null,

                status: 1,

                parent_id: 137,

                icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Assessment+(repetitive).svg",

                route: "/vrm/lab/templates",

                order: 2,

                createdAt: "2024-06-14T09:46:07.920Z",

                updatedAt: "2024-06-14T09:46:07.920Z",

                deletedAt: null,

                children: [],
              },
            ],
          },
        ],
      },

      {
        resource_id: 43,

        resource_name: "Awareness Program",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Awareness+Management.svg",

        route: null,

        order: 13,

        createdAt: "2024-02-23T20:37:53.679Z",

        updatedAt: "2024-02-23T20:37:53.679Z",

        deletedAt: null,

        children: [
          {
            resource_id: 44,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 43,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: null,

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 45,

            resource_name: "Course Management",

            description: null,

            status: 1,

            parent_id: 43,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Course+Management.svg",

            route: null,

            order: 2,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 46,

            resource_name: "Registration",

            description: null,

            status: 1,

            parent_id: 43,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Registration.svg",

            route: null,

            order: 3,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 47,

            resource_name: "Enrollment",

            description: null,

            status: 1,

            parent_id: 43,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Enrollment.svg",

            route: null,

            order: 4,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 160,

            resource_name: "Project View",

            description: null,

            status: 1,

            parent_id: 43,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Task+Overview.svg",

            route: null,

            order: 5,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 62,

        resource_name: "Blogs",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Blogs.svg",

        route: null,

        order: 17,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 163,

            resource_name: "Blogs",

            description: null,

            status: 1,

            parent_id: 62,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Blogs.svg",

            route: "/about-gotrust/blogs",

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 63,

        resource_name: "Support",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Support.svg",

        route: null,

        order: 18,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 162,

            resource_name: "Dashboard",

            description: null,

            status: 1,

            parent_id: 63,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Dashboard.svg",

            route: "/support",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 64,

        resource_name: "Finance/Commercials",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Commercials.svg",

        route: null,

        order: 19,

        createdAt: "2024-06-14T09:46:07.920Z",

        updatedAt: "2024-06-14T09:46:07.920Z",

        deletedAt: null,

        children: [
          {
            resource_id: 158,

            resource_name: "Billing & Invoice",

            description: null,

            status: 1,

            parent_id: 64,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Billing+%26+Invoice.svg",

            route: "/finance/invoice",

            order: 1,

            createdAt: "2024-06-14T09:46:07.920Z",

            updatedAt: "2024-06-14T09:46:07.920Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 161,

        resource_name: "Data Discovery",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+nav+icons/Data+Discovery+Icon.svg",

        route: null,

        order: 20,

        createdAt: "2024-07-24T07:20:23.361Z",

        updatedAt: "2024-07-24T07:20:23.361Z",

        deletedAt: null,

        children: [
          {
            resource_id: 164,

            resource_name: "Data Discovery",

            description: null,

            status: 1,

            parent_id: 161,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+nav+icons/Data+Discovery+Icon.svg",

            route: "https://demo-dd.gotrust.tech/my-data",

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },
        ],
      },

      {
        resource_id: 203,

        resource_name: "Privacy Ops",

        description: null,

        status: 1,

        parent_id: null,

        icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+nav+icons/i+icon.svg",

        route: null,

        order: 21,

        createdAt: "2024-02-23T20:37:53.679Z",

        updatedAt: "2024-02-23T20:37:53.679Z",

        deletedAt: null,

        children: [
          {
            resource_id: 209,

            resource_name: "Risk Register",

            description: null,

            status: 1,

            parent_id: 203,

            icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1730287461481-17106849.png",

            route: "/privacy-ops/risk-register",

            order: 1,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 204,

            resource_name: "Repository",

            description: null,

            status: 1,

            parent_id: 203,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Lab+(repetitive).svg",

            route: null,

            order: 2,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [
              {
                resource_id: 205,

                resource_name: "Document Repository",

                description: null,

                status: 1,

                parent_id: 204,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/privacy-ops/repository/document-repo",

                order: 2,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 207,

                resource_name: "Assessment Repository",

                description: null,

                status: 1,

                parent_id: 204,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/privacy-ops/repository/assessment-repo",

                order: 2,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 208,

                resource_name: "Record of Processing Activities Repository",

                description: null,

                status: 1,

                parent_id: 204,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/privacy-ops/repository/processing-activities",

                order: 3,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },

          {
            resource_id: 216,

            resource_name: "Regulations",

            description: null,

            status: 1,

            parent_id: 203,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Documents+(repetitive).svg",

            route: "/privacy-ops/regulations",

            order: 2,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [],
          },

          {
            resource_id: 210,

            resource_name: "Activities",

            description: null,

            status: 1,

            parent_id: 203,

            icon: "https://go-asset-management-profile-image.s3.us-east-2.amazonaws.com/GoTrust+Sidear+icons/Lab+(repetitive).svg",

            route: null,

            order: 3,

            createdAt: "2024-02-23T20:37:53.679Z",

            updatedAt: "2024-02-23T20:37:53.679Z",

            deletedAt: null,

            children: [
              {
                resource_id: 211,

                resource_name: "Duties",

                description: null,

                status: 1,

                parent_id: 210,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/privacy-ops/activities/duties",

                order: 1,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 212,

                resource_name: "Actions",

                description: null,

                status: 1,

                parent_id: 210,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/privacy-ops/activities/actions",

                order: 2,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },

              {
                resource_id: 213,

                resource_name: "Improvements",

                description: null,

                status: 1,

                parent_id: 210,

                icon: "https://go-asset-management-profile-image.s3.amazonaws.com/uploads/1726644933602-306409995.png",

                route: "/privacy-ops/activities/improvements",

                order: 3,

                createdAt: "2024-02-23T20:37:53.679Z",

                updatedAt: "2024-02-23T20:37:53.679Z",

                deletedAt: null,

                children: [],
              },
            ],
          },
        ],
      },
    ],
  },

  time: 1736317170562,
};
