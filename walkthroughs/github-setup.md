# Setup Your GitHub Repository

This walkthrough is for you to setup your mentorship family's GitHub repo.

If you do not have a GitHub account, please register at [GitHub](https://github.com/) before continuing.

## Link Your Info

NOTE: Each member of your family should do this step!

In order for git to know who you are, you must add your GitHub account info through the commands below:

```bash
git config --global user.email INSERT_EMAIL_HERE
```

```bash
git config --global user.name INSERT_NAME_HERE
```

## Clone the Starter Repo

NOTE: ONLY ONE MEMBER OF YOUR FAMILY NEEDS TO COMPLETE THE REST OF THIS TUTORIAL (but everyone should help out!) 

Open the terminal, move into your Desktop using cd, and execute this command:
```bash
git clone https://github.com/WICSMentorship2020-21/starter-website.git
```

The starter-website repo has now been cloned (or copied) onto your local computer. 

## Create Your Mentorship Family's Repo

Currently, your cloned repo is still pointing to the starter-website repo. Therefore, you will need to create 
a new repository to store your family's website.

First, cd into the repo (or folder) you just cloned.
Next, you will need to create a new repository on the GitHub website. To do so, go to [WICS Mentorship 2020-21 GitHub organization](https://github.com/WICSMentorship2020-21) and click on `New` towards the right. Here, you can create your mentorship family's repo. 
Please name the repository your family name and set the repo to public. Be sure to select "Add a README file"

## Link Your Repo

You will now link your cloned repository to the new repo you just created. On the GitHub repo you just created, 
find and copy the URL needed to clone your repo by clicking the green `Code` button. The URL should start with `https://`. Then call this command in your terminal:

```bash
git push --mirror INSERT_URL_HERE
```
Please visit this [website](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) to learn more about git mirror

You can now delete the OLD repository that you originally cloned. The folder's name of the OLD repo should be "starter-website" on your Desktop.
Finally, excute this command to clone your new family repo using the same link you used in the previous command:

```bash
git clone INSERT_URL_HERE
```

You should now be able to see the starter code on your GitHub repo! If something doesn't look right, please ask for help before continuing. 

## Invite Your Family To Collaborate

Since your entire family will be working on this repository, you will need to invite them to add content. 

In your GitHub repo, click on `Settings` -> `Manage Access` -> `Invite a Collaborator`.
Here, invite your family members via the email they used to register their GitHub account.

NOTE: You only need to do this if someone in your family is NOT in the GitHub organization.

## Testing Time!

Now, let's test it out to make sure everything works. First, modify your README file on your local computer to say something like 

"This repo contains team INSERT_TEAM_NAME's mentorship family memories."

Next, you'll need to push your changes to your repo:
1. Create a new branch with this command (you can name your branch anything e.g. UpdateReadMe):

```bash
git checkout -b YOUR_BRANCH_NAME
```

2. Use git add to add your changes:
```bash
git add README.md
```

3. Commit your changes:
```bash
git commit -m "Update the README.md file."
```

4. Finally, push your changes onto your repo:
```bash
git push origin YOUR_BRANCH_NAME
```
Your changes should have been pushed onto your GitHub repo. You can now create a pull request (PR) and merge your changes. 

Use this tutorial on [Creating Pull Requests](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). Once you've created the PR, you can simply click `merge changes` on the bottom.

Please make sure everything is working up to this point before continuing!

## Your GitHub Repo is Ready To GO!

Congrats! You have successfully set up your repository :)

Feel free to move on to the second walkthrough - webapp-setup.md!
