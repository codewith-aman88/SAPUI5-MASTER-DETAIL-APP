
# SAPUI5 Master-Detail App

A simple **SAPUI5 Master-Detail application** built with the SAPUI5 framework. This app follows the typical UI pattern where a list of items (Master) is displayed on one side, and selecting an item shows its details on the other side.

## Overview

This project demonstrates a basic **Master-Detail pattern** using SAPUI5. The master panel shows a list of items, and clicking an item loads its details in the detail panel. This pattern is common in enterprise apps where a user browses and selects records to see more information.

## Features

* Master view with a list of records
* Detail view showing information for the selected item
* SAPUI5 standard controls and routing
* Clean, intuitive navigation across views

## Getting Started

### Prerequisites

You’ll need the following before running the app:

* Node.js installed
* UI5 tooling (`@ui5/cli`) installed globally:

```sh
npm install --global @ui5/cli
```

### Install Dependencies

Clone the repository and install packages:

```sh
git clone https://github.com/codewith-aman88/SAPUI5-MASTER-DETAIL-APP.git
cd SAPUI5-MASTER-DETAIL-APP
npm install
```


* **webapp/view** – XML views for the Master and Detail UI
* **webapp/controller** – Controllers to manage view logic
* **index.html** – Entry point for the app
* **manifest.json** – App descriptor (routing, models, etc.)

## How it Works

The app uses a **SplitApp** pattern. The left side (Master) lists items, and the right side (Detail) shows details when an item is selected. This structure makes it easy for users to browse and inspect records quickly.

## Contributing

Feel free to improve it! Suggestions, fixes, and new features are welcome.

## License

This project is open and free to use.
