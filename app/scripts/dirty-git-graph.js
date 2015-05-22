function initGraph() {
	var gitgraph = new GitGraph({
	  template: "metro",
	  orientation: "vertical-reverse",
	  mode: "extended"
	});
	
	var master = gitgraph.branch("master");
	
	gitgraph.commit().commit().commit(); // 3 commits upon HEAD
	var develop = gitgraph.branch("develop"); // New branch from HEAD
	var feature = develop.branch("feature"); // New branch from develop
	
	master.commit("This commit is mine"); // Add a commit on master branch

	develop.commit();
	
	feature.commit();
	
	develop.commit({
	  dotColor: "white",
	  dotSize: 10,
	  dotStrokeWidth: 10,
	  sha1: "666",
	  message: "Pimp dat commit",
	  author: "Jacky <prince@dutunning.com>"
	});
	
	master.commit();
	
	master.commit("Before checkout");
	
	master.checkout();
	
	develop.commit("Before checkout");
	
	develop.checkout();
	var featureOfDeath = gitgraph.branch("feature-of-death");
	featureOfDeath.commit("featureOfDeath1");
	featureOfDeath.commit("featureOfDeath2");
	
	master.merge(develop, "Epic merge commit");
	master.merge(develop, { dotColor: "red" }); // The commit will be red, 'coz red is fashion!
	
	master.delete();
	
	master.commit("After delete");
}