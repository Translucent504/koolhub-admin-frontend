// import { ClaimKeys, useClaims } from "@mb";
import { Col, Row } from "antd";
import Glance from "components/dashboard/BMS/Glance";

const Home = () => {
  const { campusId } = 1;
  //   const [
  //     CanViewStudentCounter,
  //     CanViewMyCampusManagement,
  //     CanViewFeeCounter,
  //     CanViewTempEmpList,
  //     CanViewStudentAreaWise,
  //     CanViewEmployeeCounter,
  //     CanViewCampusPerformance,
  //     CanViewExitStudentsTracking,
  //     CanAccessRoomManagement,
  //   ] = useClaims([
  //     ClaimKeys.CanViewStudentCounter,
  //     ClaimKeys.CanViewMyCampusManagement,
  //     ClaimKeys.CanViewFeeCounter,
  //     ClaimKeys.CanViewTempEmpList,
  //     ClaimKeys.CanViewStudentAreaWise,
  //     ClaimKeys.CanViewEmployeeCounter,
  //     ClaimKeys.CanViewCampusPerformance,
  //     ClaimKeys.CanViewExitStudentsTracking,
  //     ClaimKeys.CanAccessRoomManagement,
  //   ]);
  const [
    CanViewStudentCounter,
    CanViewMyCampusManagement,
    CanViewFeeCounter,
    CanViewTempEmpList,
    CanViewStudentAreaWise,
    CanViewEmployeeCounter,
    CanViewCampusPerformance,
    CanViewExitStudentsTracking,
    CanAccessRoomManagement,
  ] = [true, true, true, true, true, true, true, true, true];
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24}>{/* <Header /> */}</Col>
        {/* {CanViewStudentCounter && (
          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <StudentCounter campusId={campusId}></StudentCounter>
          </Col>
        )} */}

        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Glance />
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          {/* <Announcements /> */}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xl={16} lg={16} md={16} sm={24} xs={24}>
          {CanViewEmployeeCounter && (
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              {/* <EmployeeCounter /> */}
            </Col>
          )}

          <Row>
            {CanViewExitStudentsTracking && (
              <Col
                xl={24}
                lg={24}
                md={24}
                sm={{ span: 24, order: 1 }}
                xs={{ span: 24, order: 1 }}
              >
                {/* <ExitStudentsTracking /> */}
              </Col>
            )}
            {CanViewFeeCounter && (
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={{ span: 24, order: 1 }}
                xs={{ span: 24, order: 1 }}
              >
                {/* <FeeReceivedChart /> */}
              </Col>
            )}

            {CanViewTempEmpList && (
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={{ span: 24, order: 1 }}
                xs={{ span: 24, order: 1 }}
              >
                {/* <TempEmpListWidget /> */}
              </Col>
            )}

            <Col
              xl={12}
              lg={12}
              md={12}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              {/* <MySubjects /> */}
              {/* <PurchaseApprovalList /> */}
            </Col>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              {/* <MySectionsTeachers /> */}
            </Col>
          </Row>
        </Col>

        <Col
          xl={8}
          lg={8}
          md={8}
          sm={{ span: 24, order: 1 }}
          xs={{ span: 24, order: 1 }}
        >
          {CanAccessRoomManagement && (
            <>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                {/* <RoomOccupancy /> */}
              </Col>
            </>
          )}
          {CanViewCampusPerformance && (
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              {/* <CampusUpKeepDashboard /> */}
            </Col>
          )}
          {CanViewCampusPerformance && (
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              {/* <CampusPerformance /> */}
            </Col>
          )}
          {CanViewMyCampusManagement && (
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              {/* <MyCampus /> */}
            </Col>
          )}
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={{ span: 24, order: 3 }}
            xs={{ span: 24, order: 2 }}
          >
            {/* {CanViewStudentAreaWise && <StudentsAreaWise />} */}
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Home;
