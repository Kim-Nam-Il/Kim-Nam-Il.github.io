---
layout: post
title: "Introducing LDISimulator: A Tool for Bond Portfolio Analysis"
date: 2025-04-03 14:18:00 +0900
---

Yesterday, I completed my first GitHub project: **LDISimulator**. It’s a Python-based tool I built to perform sensitivity analysis on bond portfolios, and I’d like to share a bit about it here. This project came out of my curiosity about Liability Driven Investment (LDI) and a desire to see how investments hold up under different market conditions. Below, I’ll walk through what it does and why I created it.

### What is LDISimulator?
At its core, LDISimulator is a script that analyzes how a bond portfolio reacts to changes like rising interest rates or declining equity markets. It uses historical U.S. bond yield data—covering 1-year, 2-year, 10-year, and 30-year terms from 1980 to April 2025—and lets you visualize the results. I designed it to be accessible, even for someone like me who’s still learning the ropes of financial analysis.

The project includes a few key features:
- **Historical Data Analysis**: Load bond yield data to explore trends over time.
- **Sensitivity Testing**: Calculate portfolio value changes under scenarios like a 1% rate hike or a 10% equity drop.
- **Volatility Scenarios**: Generate shock scenarios (e.g., -2σ drops) based on historical volatility.
- **Visualization**: Plot charts, such as 10Y vs. 30Y yields, to observe long-term patterns.
- **Live Data Option**: Connect to the EODHD API for real-time financial data, if you have a key.

You can find it here: [LDISimulator on GitHub](https://github.com/Kim-Nam-Il/LDISimulator).

### How It Started
I’ve been reading up on financial concepts lately, and LDI—essentially managing investments to meet future liabilities—caught my attention. Textbooks were helpful, but I wanted a hands-on way to understand it. So, I turned to Python, pulled some bond data, and started building. The result is a tool that’s both practical and a learning experience for me.

### How It Works
The code lives in a Jupyter Notebook (`notebook.ipynb`). To use it:
1. Clone the repository: `git clone https://github.com/Kim-Nam-Il/LDISimulator.git`.
2. Install dependencies: `pip install pandas numpy matplotlib requests`.
3. Open the notebook: `jupyter notebook notebook.ipynb`.
4. Run the cells to load data, define a portfolio, and see the analysis.

For example, a -2σ shock might output something like this: