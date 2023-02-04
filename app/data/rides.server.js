//For fetching ride data from the database
import { prisma } from "./database.server";

export async function addRideData(rideData) {
  prisma.ridesData.create({
    data: {},
  });
}

export async function getRidesData({ take, skip }) {
  try {
    const rides = await prisma.ridesData.findMany({
      take,
      skip,
    });
    return rides;
  } catch (error) {
    throw error;
  }
}

export async function getStationsData({ take, skip }) {
  try {
    const rides = await prisma.stationInfo.findMany({ take, skip });
    return rides;
  } catch (error) {
    throw error;
  }
}

export async function getRideData(id) {
  try {
    const ride = await prisma.ridesData.findFirst({ where: { id } });
    return ride;
  } catch (error) {
    throw error;
  }
}

export async function getStationData(id) {
  try {
    const station = await prisma.stationInfo.findFirst({ where: { id } });
    return station;
  } catch (error) {
    throw error;
  }
}
