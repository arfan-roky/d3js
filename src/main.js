import { select, range } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;
const numCircles = 100;

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// first
svg
  .append("g")
  .selectAll("rect")
  .data(range(numCircles))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("fill", "black")
  .attr("mask", "url(#circle-mask)");

// second
svg
  .append("g")
  .selectAll("rect")
  .data(range(numCircles))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("fill", "black")
  .attr("mask", "url(#circle-mask2)");

const mask = svg.append("mask").attr("id", "circle-mask");
mask
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

mask
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "black");

const mask2 = svg.append("mask").attr("id", "circle-mask2");
mask2
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "black");

mask2
  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 200)
  .attr("fill", "white");
