# 💧 HydroPredict AI

<p align="center">
  <img src="https://img.shields.io/badge/AI-Water%20Intelligence-00B8D9?style=for-the-badge" alt="AI Water Intelligence">
  <img src="https://img.shields.io/badge/Machine%20Learning-Water%20Scarcity-0B5C8E?style=for-the-badge" alt="Machine Learning">
  <img src="https://img.shields.io/badge/Telangana-District%20Analytics-00695C?style=for-the-badge" alt="Telangana">
  <img src="https://img.shields.io/badge/Next.js-React-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/Python-ML-3776AB?style=for-the-badge&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status">
</p>

<h1 align="center">🌊 HydroPredict AI</h1>

<p align="center">
  <strong>Machine Learning-Based Water Scarcity Prediction & Intelligence Platform for Telangana</strong>
</p>

<p align="center">
  <em>Predicting water risk before it becomes a crisis — using rainfall, groundwater, temperature, historical trends, and machine learning.</em>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-machine-learning">Machine Learning</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation--setup">Installation</a> •
  <a href="#-research--evaluation">Research</a>
</p>

---

## 📌 Overview

**HydroPredict AI** is an intelligent water-resource monitoring and prediction platform developed to analyze and visualize **district-level water scarcity risk across Telangana**.

The platform brings together **environmental data, machine learning, historical analysis, forecasting, interactive risk visualization, AI-assisted insights, and recommended interventions** in a single system.

Instead of looking at rainfall, groundwater, and temperature independently, HydroPredict combines these signals to provide a more understandable picture of water-resource stress and potential scarcity.

### 🌍 Core Idea

> **Observe → Analyze → Predict → Alert → Act**

HydroPredict is designed as a **decision-support and research platform**. Its predictions and recommendations are intended to help users understand environmental risk patterns and explore possible interventions.

---

## 🎯 Problem Statement

Water availability can vary significantly across Telangana due to factors such as:

| Factor | Impact |
|--------|--------|
| 🌧️ Irregular rainfall patterns | Unpredictable water supply |
| 💧 Declining groundwater levels | Depleting reserves |
| 🌡️ Increasing temperatures | Higher evaporation & stress |
| 🍂 Seasonal variation | Uneven availability |
| 🗺️ District-level differences | Uneven resource distribution |
| 📉 Long-term environmental changes | Shifting baseline conditions |

Monitoring these variables separately makes it difficult to obtain a **unified view** of water scarcity risk.

---

## 💡 Proposed Solution

HydroPredict AI applies **machine learning** and **data visualization** to environmental indicators such as:

```
Rainfall + Groundwater + Temperature + Location + Historical Trends
```

and converts them into interpretable water-risk categories:

| Risk Level | Indicator |
|------------|-----------|
| 🟢 **LOW** | Relatively lower water-resource stress |
| 🟡 **MEDIUM** | Moderate water-resource stress |
| 🟠 **HIGH** | Increased water-resource stress |
| 🔴 **CRITICAL** | Severe modeled water-resource stress |

The resulting information is presented through an **interactive web platform** containing maps, dashboards, historical trends, forecasts, alerts, AI recommendations, and **HydroBot**.

---

## 🚀 Objectives

- ✅ Predict potential water scarcity risk using environmental parameters
- ✅ Analyze relationships between rainfall, groundwater, and temperature
- ✅ Provide district-level water-risk information for Telangana
- ✅ Study historical changes in environmental conditions
- ✅ Generate future water-risk outlooks
- ✅ Classify water-resource conditions into interpretable risk levels
- ✅ Provide recommended interventions based on predicted risk
- ✅ Make complex environmental information easier to understand through visual analytics
- ✅ Build a foundation for future real-time water-resource monitoring

---

## ✨ Key Features

### 🏠 1. Interactive Home
A modern landing page introducing HydroPredict AI, its purpose, and the major capabilities of the platform.

### 🗺️ 2. Telangana Interactive Risk Map
Visualizes water-risk conditions across Telangana districts using risk categories.

### 🎛️ 3. Command Center
Provides a centralized view of:
- Total districts analyzed
- High-risk districts
- Critical districts
- Average groundwater
- Model accuracy
- District risk visualization
- Live alerts

### ⏳ 4. Water Time Machine
Allows historical environmental conditions to be explored across **2021–2026**, including:
- Rainfall evolution
- Groundwater decline
- Temperature change

### 🔮 5. Future Scarcity Forecast
Provides a future water-risk outlook for a selected district and presents **monthly risk conditions**.

### ⚡ 6. AI Action Recommendations
Converts risk information into possible interventions such as:
- Rainwater harvesting
- Groundwater recharge pits
- Smart irrigation
- Reservoir monitoring

### 🤖 7. HydroBot AI
An interactive assistant for querying Telangana water-risk information.

**Example questions:**
- *Which district has highest water scarcity?*
- *What is groundwater trend in Nalgonda?*
- *Show high risk districts.*

### 🚨 8. Risk & Alert Center
Highlights important environmental changes and changes in district risk conditions.

### 🗃️ 9. Admin Data Management
Provides a structured district-level view of:
- Rainfall
- Groundwater
- Temperature
- Risk level

---

## 🧠 Machine Learning

HydroPredict approaches water scarcity prediction as a **supervised classification problem**.

### 📥 Input Features

| Feature | Description |
|---------|-------------|
| 🌧️ Rainfall | Measures precipitation availability and variation |
| 💧 Groundwater | Represents groundwater availability and depletion |
| 🌡️ Temperature | Represents temperature conditions and environmental stress |
| 📍 District | Provides geographical/district context |
| 📈 Historical Trends | Captures environmental changes over time |

### 📤 Output

The model classifies water scarcity risk into:

| Risk Level | Meaning |
|------------|---------|
| 🟢 LOW | Relatively lower water-resource stress |
| 🟡 MEDIUM | Moderate water-resource stress |
| 🟠 HIGH | Increased water-resource stress |
| 🔴 CRITICAL | Severe modeled water-resource stress |

### 🔬 Machine Learning Models

The project can evaluate multiple supervised learning algorithms:

| Model | Description |
|-------|-------------|
| **Decision Tree** | A tree-based classification model that provides an interpretable sequence of decision rules |
| **Random Forest** | An ensemble of decision trees used to improve robustness and classification performance |
| **XGBoost** | A gradient-boosting algorithm suitable for structured/tabular datasets and nonlinear relationships |

### 📊 Evaluation Metrics

Models should be evaluated using:
- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix
- Cross-validation results

> **⚠️ Model accuracy note:** The current interface displays **99.42% model accuracy**. For a research/academic report, this value should be accompanied by the dataset used, class distribution, train/test or cross-validation methodology, preprocessing steps, and complete evaluation metrics.

---

## 🔄 System Architecture

```
┌──────────────────────────────────────────────────────────┐
│                 ENVIRONMENTAL DATA                       │
│ Rainfall │ Groundwater │ Temperature │ District │ Time  │
└─────────────────────────────┬────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                  DATA PREPROCESSING                       │
│ Cleaning │ Missing Values │ Transformation │ Validation │
└─────────────────────────────┬────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                 FEATURE ENGINEERING                      │
│ Historical Features │ Derived Indicators │ Trends       │
└─────────────────────────────┬────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                  MACHINE LEARNING                         │
│ Decision Tree │ Random Forest │ XGBoost                 │
└─────────────────────────────┬────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                  RISK CLASSIFICATION                      │
│       LOW │ MEDIUM │ HIGH │ CRITICAL                    │
└─────────────────────────────┬────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                  HYDROPREDICT AI                         │
│ Dashboard │ Risk Map │ Forecast │ Time Machine          │
│ AI Actions │ HydroBot │ Alerts │ Admin                  │
└──────────────────────────────────────────────────────────┘
```

### 🔁 End-to-End Workflow

```
Environmental Data
       ↓
Data Collection
       ↓
Data Cleaning
       ↓
Missing-Value Handling
       ↓
Feature Engineering
       ↓
Exploratory Data Analysis
       ↓
Train / Validation / Test
       ↓
Model Training
       ↓
Model Evaluation
       ↓
Water Scarcity Risk Prediction
       ↓
District-Level Visualization
       ↓
Forecast + Alerts + Recommendations
       ↓
User Decision Support
```

---

## 🖥️ Application Screenshots

### 🏠 Home Page

<p align="center">
  <img width="1467" height="836" alt="Home page" src="https://github.com/user-attachments/assets/507cf335-cecc-42b3-bad2-b997e9ebfa37" />
</p>

The Home page introduces HydroPredict AI and presents the platform's central objective of **predicting water scarcity before it becomes a crisis**.

---

### 🎛️ Telangana Live Water Status — Command Center

<p align="center">
  <img width="1467" height="836" alt="Live status page" src="https://github.com/user-attachments/assets/15559287-9667-4f7a-9650-adaef4dbda1e" />
</p>

The Command Center provides a high-level view of Telangana's modeled water conditions, including district counts, risk statistics, groundwater information, model performance, the interactive risk map, and alerts.

---

### 🗺️ Telangana Interactive Risk Map

<p align="center">
  <img width="1467" height="836" alt="Risk map page" src="https://github.com/user-attachments/assets/a28aadb4-f6b2-42b5-af30-712173309f9e" />
</p>

The Risk Map provides a geographic visualization of district-level water-risk conditions.

**Risk categories are represented as:**

<p align="center">
  🟢 LOW &nbsp;&nbsp; 🟡 MEDIUM &nbsp;&nbsp; 🟠 HIGH &nbsp;&nbsp; 🔴 CRITICAL
</p>

This makes it easier to identify **spatial patterns** in modeled water scarcity risk.

---

### ⏳ Water Time Machine

<p align="center">
  <img width="1467" height="836" alt="Time machine page" src="https://github.com/user-attachments/assets/61a70245-7692-4249-b4b4-75e446370ef8" />
</p>

The Time Machine explores historical environmental changes from **2021 to 2026**.

It presents:
- Rainfall evolution
- Groundwater decline
- Temperature rise
- Selected district information

This module helps users understand how environmental indicators have changed over time.

---

### 🔮 2027 Water Scarcity Forecast

<p align="center">
  <img width="1467" height="836" alt="Forecast page" src="https://github.com/user-attachments/assets/29547ee5-a0a3-4c9e-8f77-112c9fb4e210" />
</p>

The Forecast page presents a modeled future water-risk outlook for a selected Telangana district.

Monthly risk conditions can be displayed to help users explore potential changes in water scarcity risk.

> **⚠️ Note:** Forecast results are model-generated estimates and should not be interpreted as guaranteed future conditions.

---

### ⚡ AI Action Recommendations

<p align="center">
  <img width="1467" height="836" alt="AI actions" src="https://github.com/user-attachments/assets/90bb4cc5-91c4-41c9-9f49-62309c4cec9e" />
</p>

The AI Actions module translates predicted water-risk information into possible interventions.

**Examples include:**
- Rainwater harvesting
- Groundwater recharge pits
- Smart irrigation
- Reservoir monitoring

The goal is to move from **prediction to practical response**.

---

### 🤖 HydroBot AI

<p align="center">
  <img width="388" height="608" alt="Ask chatbox" src="https://github.com/user-attachments/assets/2ff1cd71-fa94-41a0-865f-d0fe23c622a0" />
</p>

HydroBot provides a conversational interface for exploring water-risk information.

**Example queries:**
- *Which district has highest water scarcity?*
- *What is groundwater trend in Nalgonda?*
- *Show high risk districts.*

The assistant is designed to make platform information easier to access without requiring users to navigate every dashboard manually.

---

### 🗃️ Telangana Data Management — Admin

<p align="center">
  <img width="1467" height="836" alt="Admin page" src="https://github.com/user-attachments/assets/9584819c-86e0-430d-b4a1-b28714024137" />
</p>

The Admin page provides a structured view of district hydrological records.

**The displayed fields include:**
- District
- Rainfall
- Groundwater
- Temperature
- Risk

A district search interface helps users quickly locate records.

---

## 🛠️ Technology Stack

### 🎨 Frontend

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Recharts-8884d8?style=for-the-badge" alt="Recharts">
</p>

- **Next.js** — React framework for production
- **React** — UI library
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Utility-first CSS framework
- **Recharts / Data Visualization** — Interactive charts
- **Responsive UI** — Mobile-friendly design

### 🧠 Machine Learning & Data Science

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas">
  <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy">
  <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn">
  <img src="https://img.shields.io/badge/XGBoost-189FDD?style=for-the-badge" alt="XGBoost">
</p>

- **Python** — Core programming language
- **Pandas** — Data manipulation
- **NumPy** — Numerical computing
- **Scikit-learn** — Machine learning library
- **XGBoost** — Gradient boosting
- **Supervised Learning** — Classification approach
- **Feature Engineering** — Derived indicators
- **Model Evaluation** — Performance metrics

### 🔧 Development

<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code">
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" alt="Jupyter">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
</p>

---

## 📂 Project Structure

```
hydropredict-ai/
│
├── public/
│   └── screenshots/
│       ├── home.png
│       ├── command-center.png
│       ├── risk-map.png
│       ├── time-machine.png
│       ├── forecast.png
│       ├── ai-actions.png
│       ├── hydrobot.png
│       └── admin.png
│
├── src/
│   ├── app/
│   │   ├── admin/
│   │   ├── dashboard/
│   │   ├── district/
│   │   ├── forecast/
│   │   ├── map/
│   │   ├── recommendations/
│   │   ├── trends/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── charts/
│   │   ├── chat/
│   │   ├── dashboard/
│   │   ├── district/
│   │   ├── forecast/
│   │   ├── hero/
│   │   ├── layout/
│   │   ├── map/
│   │   └── ui/
│   │
│   └── lib/
│       ├── data/
│       ├── hydrobot.ts
│       ├── risk-colors.ts
│       └── types.ts
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/NavyaSwamy/Hydropredict-water-scarcity-Prediction-for-Telangana.git
```

### 2. Navigate to the project

```bash
cd Hydropredict-water-scarcity-Prediction-for-Telangana
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```
http://localhost:3000
```

---

## 📊 Data

HydroPredict is designed around environmental datasets containing variables such as:

- Rainfall
- Groundwater levels
- Temperature
- District/geographical information
- Historical observations
- Forecast-related variables

For an academic or research implementation, each dataset should be documented with:

| Aspect | Description |
|--------|-------------|
| **Source** | Where the data was obtained |
| **Time Period** | Duration covered |
| **Spatial Resolution** | Geographic granularity |
| **Measurement Units** | Units of measurement |
| **Missing-Value Handling** | How gaps were treated |
| **Preprocessing** | Cleaning and transformation steps |
| **Feature Engineering** | Derived features created |
| **License/Usage Conditions** | Data usage rights |

---

## 🧪 Research & Model Evaluation

To make the machine-learning component suitable for academic evaluation, the project can include the following experiments:

### 1. Model Comparison

Compare:
- Decision Tree
- Random Forest
- XGBoost

### 2. Performance Evaluation

Measure:
- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix
- Cross-Validation

### 3. Feature Analysis

Study how rainfall, groundwater, temperature, historical trends, and district-level information contribute to predicted risk.

### 4. Class Distribution

Analyze the number of observations belonging to:
- LOW
- MEDIUM
- HIGH
- CRITICAL

> This is important because **class imbalance** can affect classification metrics.

### 5. Explainability

Future versions can provide feature-importance or explainable-AI outputs showing **why** a district received a particular risk classification.

---

## 🌍 Potential Applications

| Application | Description |
|-------------|-------------|
| 🏛️ **Water Resource Planning** | Support data-driven analysis of district-level water-resource conditions |
| 🌱 **Environmental Monitoring** | Help identify regions experiencing increasing modeled water stress |
| 🌾 **Agricultural Planning** | Provide environmental indicators that can support irrigation and water-management analysis |
| 🏙️ **Regional Planning** | Help understand differences in water-resource conditions between districts |
| 👥 **Public Awareness** | Present complex environmental information in an easier-to-understand visual format |

---

## 🔮 Future Enhancements

- 📡 Real-time IoT groundwater sensors
- 💧 Live groundwater monitoring
- 🛰️ Satellite-based environmental analysis
- 🌦️ Additional meteorological datasets
- 📱 Mobile application
- 🗺️ Village-level or finer-grained prediction
- 🔔 Automated district alerts
- 🤖 Advanced time-series forecasting
- ☁️ Cloud deployment
- 📊 Explainable AI
- 🧪 Automated model tuning
- 🌐 Integration with additional water-resource indicators
- 🔄 Continuous model retraining using new observations

---

## ⚠️ Limitations

HydroPredict is intended as a **research, analytical, and decision-support platform**.

Prediction quality depends on:

- Data quality
- Data coverage
- Measurement frequency
- Missing observations
- Feature selection
- Model selection
- Training methodology
- Environmental variability

> **Therefore, model-generated risk levels and forecasts should be validated against appropriate real-world observations before being used for operational water-management decisions.**

---

## 📌 Project Highlights

| Feature | Status |
|---------|--------|
| 💧 Machine Learning-based water scarcity prediction | ✅ |
| 🌧️ Rainfall analysis | ✅ |
| 💧 Groundwater analysis | ✅ |
| 🌡️ Temperature analysis | ✅ |
| 🗺️ Telangana district risk map | ✅ |
| 📊 Interactive command center | ✅ |
| ⏳ Historical Water Time Machine | ✅ |
| 🔮 Future scarcity outlook | ✅ |
| ⚡ AI intervention recommendations | ✅ |
| 🤖 HydroBot AI assistant | ✅ |
| 🚨 Risk and alert monitoring | ✅ |
| 🗃️ Admin data management | ✅ |
| 📈 Environmental trend visualization | ✅ |
| ⚛️ Modern Next.js + React interface | ✅ |

---

## 🎓 Academic / Research Value

HydroPredict combines multiple areas of computer science and data science into one project:

```
Machine Learning
       +
Data Science
       +
Environmental Analytics
       +
Data Visualization
       +
Web Development
       +
Forecasting
       +
AI-Assisted Interaction
```

This makes the project suitable for demonstrating an **end-to-end workflow** from:

```
Environmental Data → Machine Learning → Prediction → Visualization → Decision Support
```

---

## 👩‍💻 Author

**Navya Swamy Valmiki**

Computer Science & Engineering – Data Science  
B V Raju Institute of Technology, Narsapur, Telangana

---

## 🔗 Repository

**GitHub Repository:**

[https://github.com/NavyaSwamy/Hydropredict-water-scarcity-Prediction-for-Telangana](https://github.com/NavyaSwamy/Hydropredict-water-scarcity-Prediction-for-Telangana)

---

## ⭐ Support

If you find **HydroPredict AI** interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  <strong>💧 HydroPredict AI</strong>
</p>

<p align="center">
  <em>Predict. Monitor. Act.</em>
</p>

<p align="center">
  <sub>Machine Learning for smarter water-resource intelligence.</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with love">
  <img src="https://img.shields.io/badge/For-Telangana-blue?style=for-the-badge" alt="For Telangana">
</p>
