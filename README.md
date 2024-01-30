# CaliForge Hub

CaliForge Hub is a React-powered fitness dashboard tailored for calisthenics enthusiasts. Plan your workouts, track your progress, and connect with a vibrant community of like-minded athletes.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **CaliForge Dashboard:** Visualize and plan your calisthenics routines.
- **Community Integration:** Connect with other calisthenics enthusiasts, share achievements, and foster a supportive community.
- **Progress Tracking:** Track your workout progress with intuitive charts.
- **Easy Setup:** Get started quickly with straightforward installation steps.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AKRAM-2002/Gym-DashBoard.git
   ```
### Usage

1. Change into the project directory:

    ```bash
    cd Gym-DashBoard
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```
    npm start
    ```

### Project Structure
```bash	
/src
  /assets
    /images
    /icons
  /components
    /common
      Button.js
      Input.js
      ...
    /auth
      SignIn.js
      SignUp.js
      UserProfile.js
      EditProfile.js
      ChangePassword.js
      ...
    /dashboard
      DashboardOverview.js
      ...
    /workouts
      WorkoutCalendar.js
      RoutineBuilder.js
      WorkoutHistory.js
      AiAssistant.js
      ...
    /progress
      ProgressCharts.js
      ...
    /achievements
      AchievementsView.js
      ...
    /nutrition
      NutritionLog.js
      ...
    /community
      CommunityFeed.js
      UserConnections.js
      ...
  /context
    AuthContext.js
    UserDataContext.js
    WorkoutDataContext.js
    ...
  /hooks
    useAuth.js
    useUserData.js
    useWorkoutData.js
    ...
  /pages
    Home.js
    UserProfilePage.js
    Explore.js
    ...
  /services
    authService.js
    userDataService.js
    workoutDataService.js
    ...
  /styles
    globalStyles.js
    theme.js
  /utils
    helpers.js
    constants.js
  App.js
  index.js
```