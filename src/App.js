import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/components/BlogPost";
import { Theme, Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import React from "react";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Theme
      accentColor="gray"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: "100%" }}
        >
          <Flex gap="4" className="app-container" align="start">
            <Nav />
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogName" element={<BlogPost />} />
            </Routes>
          </Flex>
        </motion.div>
      </Router>
    </Theme>
  );
}

export default App;
